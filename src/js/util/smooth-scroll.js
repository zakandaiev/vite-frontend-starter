function smoothScroll(element = null, behavior = 'smooth') {
  if (element) {
    element.scrollIntoView({ behavior });
  } else {
    window.scrollTo({ top: 0, behavior });
  }
}

export default smoothScroll;
