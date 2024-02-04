import toast from '@/js/partial/toast';

document.addEventListener('DOMContentLoaded', () => {
  if (navigator && navigator.clipboard) {
    return false;
  }

  document.addEventListener('click', (event) => {
    const element = event.target.closest('[data-copy]');

    if (!element) {
      return false;
    }

    event.preventDefault();

    const text = element.getAttribute('data-copy').length > 0 ? element.getAttribute('data-copy') : element.textContent;

    if (!text) {
      return false;
    }

    navigator.clipboard.writeText(text).then(() => {
      toast(element.getAttribute('data-toast'), element.getAttribute('data-toast-type') || 'info');
    });
  });
});
