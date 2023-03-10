/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
class Modal {
  constructor(trigger, modal) {
    this.modal = modal;
    this.trigger = trigger;
    this.closeBtn = '.modal__close';
    this.state = false;
  }

  open() {
    document.querySelector(this.modal).style.display = 'block';
    this.state = true;
  }

  close() {
    document.querySelector(this.modal).style.display = 'none';
    this.state = false;
  }

  listener() {
    document.addEventListener('click', (e) => {
      if ((this.state && !e.target.closest('.modal')) || (this.state && e.target.closest(this.closeBtn))) {
        this.close();
      }
      if (!this.state && e.target.closest(this.trigger)) {
        this.open();
      }
    });
  }
}

const mainModal = new Modal('[data-modal="main-modal"]', '[data-modal-el="main-modal"]');
mainModal.listener();

const cateringModal = new Modal('[data-modal="catering-modal"]', '[data-modal-el="catering-modal"]');
cateringModal.listener();
