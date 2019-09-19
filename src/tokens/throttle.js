function throttle(method, delay, context) {
  clearTimeout(method.timmerId);

  method.timmerId = setTimeout(() => {
    method.call(context);
  }, delay);
}

window.onscroll = throttle(onScroll, 5000, this);

function onScroll() {
  console.log(1);
}
