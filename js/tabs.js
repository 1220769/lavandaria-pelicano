// ── TABS.JS — Lavandaria Pelicano ─────────────────
// Lê preços do JSONBin (via /api/config) e constrói as tabs.
// Se o JSONBin não estiver acessível, usa o PRICES do prices.js.

const ITEMS_PER_PAGE = 12;
let currentPage = {};
let activoTab = 'vestuario';

// ── CONVERTER formato JSONBin → formato PRICES ────
// JSONBin: array de { id, emoji, nome, nota, itens: [{nome, preco}] }
// PRICES:  { vestuario: { label, nota, items: [{nome, preco}] }, ... }
function converterParaPRICES(precos) {
  const resultado = {};
  precos.forEach(cat => {
    resultado[cat.id] = {
      label: cat.nome,
      nota:  cat.nota || '',
      items: cat.itens.map(item => ({
        nome:  item.nome,
        preco: item.preco
      }))
    };
  });
  return resultado;
}

// ── INICIALIZAR ───────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  let precos = null;

  // Tentar carregar do JSONBin
  try {
    const res = await fetch('/api/config');
    if (res.ok) {
      const cfg = await res.json();
      if (cfg && Array.isArray(cfg.precos) && cfg.precos.length > 0) {
        precos = converterParaPRICES(cfg.precos);
      }
    }
  } catch (err) {
    console.warn('[Pelicano] Preços do JSONBin indisponíveis, a usar prices.js:', err.message);
  }

  // Fallback para prices.js estático
  if (!precos) {
    precos = typeof PRICES !== 'undefined' ? PRICES : {};
  }

  // Verificar âncora na URL (ex: servicos.html#peles)
  const hash = window.location.hash.replace('#', '');
  if (hash && precos[hash]) activoTab = hash;

  buildTabs(precos);
  buildPanels(precos);
  activateTab(activoTab, precos);
});

// ── CONSTRUIR TABS ────────────────────────────────
function buildTabs(precos) {
  const container = document.getElementById('tabs');
  container.innerHTML = '';

  Object.keys(precos).forEach(key => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.dataset.tab = key;
    btn.textContent = precos[key].label;
    btn.addEventListener('click', () => activateTab(key, precos));
    container.appendChild(btn);
  });
}

// ── CONSTRUIR PAINÉIS ─────────────────────────────
function buildPanels(precos) {
  const container = document.getElementById('tabContent');
  container.innerHTML = '';

  Object.keys(precos).forEach(key => {
    const cat = precos[key];
    const panel = document.createElement('div');
    panel.className = 'tab-panel';
    panel.id = 'panel-' + key;

    panel.innerHTML = `
      <div class="search-bar">
        <span class="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Pesquisar em ${cat.label}..."
          oninput="filterItems('${key}', this.value)"
        />
      </div>
      <div class="price-grid" id="grid-${key}"></div>
      <div class="empty-state" id="empty-${key}">
        Nenhuma peça encontrada para essa pesquisa.
      </div>
      ${cat.nota ? `<div class="price-nota">ℹ️ ${cat.nota}</div>` : ''}
    `;

    container.appendChild(panel);
    renderItems(key, cat.items, precos);
  });
}

// ── RENDERIZAR ITEMS ──────────────────────────────
function renderItems(key, items, precos) {
  const grid = document.getElementById('grid-' + key);
  if (!currentPage[key]) currentPage[key] = 1;

  const page      = currentPage[key];
  const start     = (page - 1) * ITEMS_PER_PAGE;
  const end       = start + ITEMS_PER_PAGE;
  const pageItems = items.slice(start, end);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  grid.innerHTML = '';

  pageItems.forEach(item => {
    const isVista = item.preco === 'Só à vista';
    const div = document.createElement('div');
    div.className = 'price-item';
    div.dataset.nome = item.nome.toLowerCase();
    div.innerHTML = `
      <span class="price-name">${item.nome}</span>
      <span class="price-value ${isVista ? 'vista' : ''}">${item.preco}</span>
    `;
    grid.appendChild(div);
  });

  // Paginação
  let pagination = document.getElementById('pagination-' + key);
  if (!pagination) {
    pagination = document.createElement('div');
    pagination.id = 'pagination-' + key;
    pagination.className = 'pagination';
    grid.parentNode.insertBefore(pagination, grid.nextSibling);
  }

  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }

  pagination.innerHTML = `
    <button class="page-btn" onclick="changePage('${key}', ${page - 1})" ${page === 1 ? 'disabled' : ''}>← Anterior</button>
    <span class="page-info">${page} / ${totalPages}</span>
    <button class="page-btn" onclick="changePage('${key}', ${page + 1})" ${page === totalPages ? 'disabled' : ''}>Próxima →</button>
  `;
}

function changePage(key, page) {
  currentPage[key] = page;
  // Precisamos de re-aceder aos preços actuais — guardamos na window para ser acessível
  const precos = window._pelicanoPrecos;
  if (precos) renderItems(key, precos[key].items, precos);
}

// ── ATIVAR TAB ────────────────────────────────────
function activateTab(key, precos) {
  activoTab = key;

  // Guardar referência global para o changePage ter acesso
  if (precos) window._pelicanoPrecos = precos;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === key);
  });

  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === 'panel-' + key);
  });

  history.replaceState(null, '', '#' + key);

  document.querySelector('.tabs-wrapper').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── FILTRO DE PESQUISA ────────────────────────────
function filterItems(key, query) {
  const items = document.querySelectorAll(`#grid-${key} .price-item`);
  const empty = document.getElementById('empty-' + key);
  const term  = query.toLowerCase().trim();
  let visible = 0;

  items.forEach(item => {
    const match = item.dataset.nome.includes(term);
    item.classList.toggle('hidden', !match);
    if (match) visible++;
  });

  empty.style.display = visible === 0 ? 'block' : 'none';
}