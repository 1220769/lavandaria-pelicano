/**
 * config.js — Lavandaria Pelicano
 * Lê dados do JSONBin via proxy Netlify e aplica no site.
 * Incluir em todas as páginas: <script src="js/config.js"></script>
 */

const CONFIG_URL = '/api/config';
const CACHE_KEY  = 'pelicano_config';
const CACHE_TTL  = 5 * 60 * 1000; // 5 minutos

let configCache = null;

// ─── LER CONFIGURAÇÃO ───────────────────────────────────────────
async function carregarConfig() {
  // Buscar sempre do servidor (sem cache) para garantir dados actualizados
  try {
    const res = await fetch(CONFIG_URL + '?t=' + Date.now());
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    if (data && data.contactos) return data;
  } catch (err) {
    console.warn('[Pelicano] Não foi possível carregar configuração:', err.message);
  }
  return null;
}

// ─── APLICAR PROMOÇÃO ───────────────────────────────────────────
function aplicarPromocao(cfg) {
  const banner = document.querySelector('.promo-banner');
  if (!banner) return;

  const promo = cfg?.promocao;
  if (!promo) return;

  // Mostrar ou esconder banner
  const mostrar = promo.ativa !== false && cfg?.toggles?.promo !== false;
  banner.style.display = mostrar ? '' : 'none';
  if (!mostrar) return;

  // Etiqueta
  const labelEl = banner.querySelector('.promo-label');
  if (labelEl && promo.badge) labelEl.textContent = promo.badge;

  // Itens com estrutura fixa (p1 e p2)
  const itemsEl = banner.querySelector('.promo-items');
  if (!itemsEl) return;

  let html = '';

  if (promo.p1?.nome) {
    html += `
      <div class="promo-item">
        <span class="promo-name">${promo.p1.nome}</span>
        <span class="promo-price">${promo.p1.preco}${promo.p1.detalhe ? ` <small>(${promo.p1.detalhe.replace(/[()]/g,'')})</small>` : ''}</span>
      </div>`;
  }

  if (promo.p1?.nome && promo.p2?.nome) {
    html += `<div class="promo-sep">·</div>`;
  }

  if (promo.p2?.nome) {
    html += `
      <div class="promo-item">
        <span class="promo-name">${promo.p2.nome}</span>
        <span class="promo-price">${promo.p2.preco}${promo.p2.detalhe ? ` <small>(${promo.p2.detalhe.replace(/[()]/g,'')})</small>` : ''}</span>
      </div>`;
  }

  if (html) itemsEl.innerHTML = html;
}

// ─── APLICAR CONTACTOS ──────────────────────────────────────────
function aplicarContactos(cfg) {
  const ct = cfg?.contactos;
  if (!ct) return;

  // Telefone — todos os links tel: e textos com o número
  if (ct.telefone) {
    const telLimpo = ct.telefone.replace(/\s/g, '');
    document.querySelectorAll('a[href^="tel:"]').forEach(a => {
      a.href = 'tel:' + telLimpo;
      // só actualiza o texto se for só o número (não o botão com ícone SVG)
      if (a.textContent.trim().match(/^\d[\d\s]+\d$/)) {
        a.textContent = ct.telefone;
      }
    });

    // Nav CTA (botão do telefone na navbar)
    const navCta = document.querySelector('.nav-cta');
    if (navCta) navCta.textContent = ct.telefone;
  }

  // Email
  if (ct.email) {
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
      a.href = 'mailto:' + ct.email;
      if (a.textContent.includes('@')) a.textContent = ct.email;
    });
  }

  // Facebook
  if (ct.facebook) {
    document.querySelectorAll('a[href*="facebook.com"]').forEach(a => {
      a.href = ct.facebook;
    });
  }

  // Morada nos info cards
  const moradaEls = document.querySelectorAll('[data-dynamic="morada"]');
  moradaEls.forEach(el => {
    el.textContent = `${ct.rua} · ${ct.cidade}`;
  });

  // Pagamentos
  if (ct.pagamentos) {
    const pagEl = document.querySelector('[data-dynamic="pagamentos"]');
    if (pagEl) pagEl.textContent = ct.pagamentos;
  }
}

  // Secção "Porquê nós" — item 02
  const porqueHorario = document.querySelector('[data-dynamic="horario-porque"]');
  if (porqueHorario) {
    porqueHorario.innerHTML = `Abertos de ${diasStr.toLowerCase()} das ${horarioStr}${notaStr ? '. ' + notaStr : ''}. Porque sabemos que a vida não pára.`;
  }

  // Tag do item 02
  const tagHorario = document.querySelector('[data-dynamic="horario-tag"]');
  if (tagHorario) {
    tagHorario.textContent = horarioStr;
  }
}

// ─── APLICAR TEXTOS ─────────────────────────────────────────────
function aplicarTextos(cfg) {
  const t = cfg?.textos;
  if (!t) return;

  const mapa = {
    'txt-hero-titulo':  t.heroTitulo,
    'txt-hero-sub':     t.heroSub,
    'txt-hero-btn':     t.heroBtn,
    'txt-slogan':       t.slogan,
    'txt-descricao':    t.descricao,
    'txt-ct-titulo':    t.ctTitulo,
    'txt-ct-sub':       t.ctSub,
  };

  Object.entries(mapa).forEach(([id, val]) => {
    if (!val) return;
    document.querySelectorAll(`[data-dynamic="${id}"]`).forEach(el => {
      el.textContent = val;
    });
  });

  // Ano de fundação
  if (t.fundacao) {
    document.querySelectorAll('[data-dynamic="fundacao"]').forEach(el => {
      el.textContent = t.fundacao;
    });
    // Stats "+50 anos" — calcula dinamicamente
    const anos = new Date().getFullYear() - parseInt(t.fundacao);
    document.querySelectorAll('[data-dynamic="anos-exp"]').forEach(el => {
      el.textContent = '+' + anos;
    });
  }
}

// ─── APLICAR TOGGLES ────────────────────────────────────────────
function aplicarToggles(cfg) {
  const tg = cfg?.toggles;
  if (!tg) return;

  // WhatsApp
  const wa = document.getElementById('whatsapp-btn');
  if (wa) wa.style.display = tg.whatsapp !== false ? '' : 'none';

  // Stats section
  const stats = document.querySelector('.stats-section');
  if (stats) stats.style.display = tg.stats !== false ? '' : 'none';

  // Mapa (página contacto)
  const mapa = document.querySelector('.mapa-section, #mapa-section');
  if (mapa) mapa.style.display = tg.mapa !== false ? '' : 'none';
}

// ─── APLICAR WHATSAPP ───────────────────────────────────────────
function aplicarWhatsapp(cfg) {
  const numero = cfg?.contactos?.whatsapp;
  if (!numero) return;

  const wa = document.getElementById('whatsapp-btn');
  if (wa) {
    const href = wa.getAttribute('href') || '';
    const mensagem = href.includes('text=')
      ? '&text=' + href.split('text=')[1]
      : '';
    wa.href = `https://wa.me/${numero}${mensagem}`;
  }
}

// ─── APLICAR TUDO ───────────────────────────────────────────────
async function aplicarConfig() {
  const cfg = await carregarConfig();
  if (!cfg) return; // falhar silenciosamente, site continua com conteúdo estático

  aplicarPromocao(cfg);
  aplicarContactos(cfg);
  aplicarTextos(cfg);
  aplicarToggles(cfg);
  aplicarWhatsapp(cfg);
}

// Correr quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', aplicarConfig);
} else {
  aplicarConfig();
}