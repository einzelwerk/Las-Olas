import Swiper from 'swiper';
import globalGap from './Init';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss';

const detailsNode = document.querySelector('.details-wrapper');
if (detailsNode) {
  const detailsSlider = new Swiper(detailsNode, {
    slidesPerView: 1,
    init: false,
    spaceBetween: parseInt(globalGap, 10),
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
  detailsSlider.init();
}
