function smoothScroll(element = null, offsetTop = 0, behavior = 'smooth') {
  if (element) {
    element.scrollIntoView({ behavior });
  } else {
    window.scrollTo({ top: 0, behavior });
  }
}

export default smoothScroll;
