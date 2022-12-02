export function next(elem, selector) {
  const nextElem = elem.nextElementSibling;

  if (!selector) {
    return nextElem;
  }

  if (nextElem && nextElem.matches(selector)) {
    return nextElem;
  }

  return null;
}
export function prev(elem, selector) {
  const prevElem = elem.previousElementSibling;

  if (!selector) {
    return prevElem;
  }

  if (prevElem && prevElem.matches(selector)) {
    return prevElem;
  }

  return null;
}

export function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
