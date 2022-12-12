import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox';
// eslint-disable-next-line import/no-unresolved
import '@fancyapps/ui/dist/fancybox.css';

Fancybox.bind('[data-fancybox]', {
  Toolbar: {
    display: ['close'],
  },
  Image: {
    zoom: false,
  },
});
