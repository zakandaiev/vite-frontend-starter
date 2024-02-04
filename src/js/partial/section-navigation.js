import { getSlug } from '@/js/util/cyr-to-lat';
import { randomString } from '@/js/util/random';

document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.section__navigation');
  const navigationTitles = document.querySelectorAll('.section__title');

  if (!navigation || !navigationTitles.length) {
    return false;
  }

  navigationTitles.forEach((title) => {
    const link = document.createElement('a');
    const linkId = `${getSlug(title.textContent)}-${randomString()}`;

    title.id = linkId;

    link.href = `#${linkId}`;
    link.innerHTML = `<span>${title.textContent}</span>`;
    link.classList.add('section__navigation-item');

    navigation.appendChild(link);
  });

  const header = document.getElementById('header');
  const stickyParent = navigation.closest('.position-sticky');
  if (header && stickyParent) {
    stickyParent.style.top = `calc(2em + ${header.offsetHeight}px)`;
  }

  sclollSpy();
});

function sclollSpy() {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeSectionTitle = entry.target.querySelector('.section__title');

          if (!activeSectionTitle) {
            return false;
          }

          document.querySelectorAll('.section__navigation-item').forEach((item) => {
            if (item.hash === `#${activeSectionTitle.id}`) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });
        }
      });
    },
    {
      root: document,
      rootMargin: '-10% 0px -90% 0px',
    },
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}
