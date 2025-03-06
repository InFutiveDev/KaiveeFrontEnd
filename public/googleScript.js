// window.dataLayer = window?.dataLayer || [];
// function gtag() {
//   dataLayer.push(arguments);
// }
// gtag("js", new Date());
// gtag("config", "G-VBSMY8PWWH");

window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

// Initialize Google Analytics only if needed
gtag("js", new Date());

if (!window.GA_TRACKING_ID) {
  window.GA_TRACKING_ID = ""; // Keep empty for now
}

if (window.GA_TRACKING_ID) {
  gtag("config", window.GA_TRACKING_ID);
}

