// ── FORMULÁRIO DE CONTACTO ────────────────────────
// Usa Formspree para enviar o email gratuitamente.
// Regista-te em formspree.io, cria um form, e substitui
// YOUR_FORM_ID pelo ID que te derem (ex: xpwzgkla)

const FORMSPREE_ID = 'xbdqavvk';

document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form    = e.target;
  const btn     = form.querySelector('.form-submit');
  const success = document.getElementById('formSuccess');
  const error   = document.getElementById('formError');

  // Reset
  success.style.display = 'none';
  error.style.display   = 'none';
  btn.textContent       = 'A enviar...';
  btn.disabled          = true;

  // Se ainda não configuraste o Formspree, simula sucesso
  if (FORMSPREE_ID === 'YOUR_FORM_ID') {
    await new Promise(r => setTimeout(r, 1000));
    success.style.display = 'block';
    form.reset();
    btn.textContent = 'Enviar mensagem';
    btn.disabled    = false;
    return;
  }

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method:  'POST',
      headers: { 'Accept': 'application/json' },
      body:    new FormData(form),
    });

    if (res.ok) {
      success.style.display = 'block';
      form.reset();
    } else {
      error.style.display = 'block';
    }
  } catch {
    error.style.display = 'block';
  }

  btn.textContent = 'Enviar mensagem';
  btn.disabled    = false;
});