const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('img');
const modalCaption = modal.querySelector('figcaption');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    modalImage.src = item.dataset.full;
    modalImage.alt = item.querySelector('img').alt;
    modalCaption.textContent = item.dataset.caption;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});

const closeModal = () => {
  modal.hidden = true;
  modalImage.src = '';
  document.body.style.overflow = '';
};

modal.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
});
