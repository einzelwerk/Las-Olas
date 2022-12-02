import { Fancybox } from '@fancyapps/ui';
// eslint-disable-next-line import/no-unresolved
import '@fancyapps/ui/dist/fancybox.css';

Fancybox.bind('[data-fancybox]', {
  Toolbar: {
    display: ['close'],
  },

  template: {
    // Close button icon
    closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
    // Loading indicator icon
    spinner:
      '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
    // Main container element
    main: null,
  },
});
