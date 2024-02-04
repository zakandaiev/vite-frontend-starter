import '@/js/partial/watermark';
import '@/js/partial/data-copy';
import '@/js/partial/external-link-norefer';
import '@/js/partial/format-tel-link';
import '@/js/partial/placeholder-image';
import '@/js/partial/protect-image';
import '@/js/partial/responsive-table';
import '@/js/partial/smooth-scroll';

import '@/js/partial/header';
import '@/js/partial/section-navigation';

const base = document.createElement('base');
base.href = import.meta.env.BASE_URL;
document.head.insertBefore(base, document.head.firstChild);

document.addEventListener('DOMContentLoaded', () => {
  // dataCopy();
  // formatTelLink();
  // externalLinkNorefer();
  // protectImage();
  // responsiveTable();
  // initSmoothScroll();
});
