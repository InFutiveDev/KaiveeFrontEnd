(function (w, d, s, c, r, a, m) {
  if (w.KiwiObject) return; // Prevent duplicate loading

  w['KiwiObject'] = r;
  w[r] = w[r] || function () {
    (w[r].q = w[r].q || []).push(arguments);
  };
  w[r].l = 1 * new Date();
  a = d.createElement(s);
  m = d.getElementsByTagName(s)[0];
  a.async = 1;
  a.src = c;
  m.parentNode.insertBefore(a, m);
})(window, document, "script", "https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v=" + new Date().getTime(), "kiwi");

window.addEventListener("load", function () {
  if (typeof kiwi !== "undefined") {
    kiwi.init('', 'QOn7nphQuINwtC0UOyuGYvgZ6j3zL0bI', {});
  } else {
    console.error("Kiwi SDK not loaded properly");
  }
});
