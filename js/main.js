const S = window.SITE;
document.querySelectorAll('[data-link="linkedin"]').forEach(a => { a.href = S.linkedin; a.target = "_blank"; a.rel = "noopener noreferrer"; });
document.querySelectorAll('[data-link="email"]').forEach(a => a.href = "mailto:" + S.email);
document.querySelectorAll('[data-link="phone"]').forEach(a => a.href = "tel:" + S.phone);

// mobile nav
const btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
btn.addEventListener('click', () => { const o = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// active nav link
const secs = [...document.querySelectorAll('main section[id]')];
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) nav.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
secs.forEach(s => spy.observe(s));
document.getElementById('yr').textContent = new Date().getFullYear();
