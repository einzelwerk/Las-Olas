const root = document.documentElement;
const header = document.querySelector('.header');

root.style.setProperty('--header-height', `${header.offsetHeight}px`);

const globalGap = getComputedStyle(document.documentElement).getPropertyValue('--gap');

export default globalGap;
