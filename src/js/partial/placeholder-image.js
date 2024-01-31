import route from '@/js/util/route';

window.onload = () => {
  document.querySelectorAll('img').forEach((image) => {
    if (image.complete && typeof image.naturalWidth === 'number' && image.naturalWidth <= 0) {
      image.src = `${route.base}/src/img/no-image.jpg`;
    }
  });
};
