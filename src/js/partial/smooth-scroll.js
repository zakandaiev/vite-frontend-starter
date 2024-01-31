import smoothScroll from '@/js/util/smooth-scroll';

const headerHeight = 240;

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    if (event.target.tagName !== 'A') {
      return false;
    }
    const anchor = event.target;
    const anchor_href = anchor.getAttribute('href');

    if (anchor_href === '#') {
      event.preventDefault();

      smoothScroll(null, headerHeight);
    } else if (anchor_href.charAt(0) === '#' || (anchor_href.charAt(0) === '/' && anchor_href.charAt(1) === '#')) {
      if (!anchor.hash) {
        return false;
      }

      const target = document.querySelector(anchor.hash);
      if (target) {
        event.preventDefault();

        smoothScroll(target, headerHeight);
      }
    }
  });
});
