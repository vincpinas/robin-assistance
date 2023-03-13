export const uniqueId = () => {
  var d = new Date().getTime();
  var d2 = ((typeof performance !== "undefined") && performance.now && (performance.now() * 1000)) || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : ((r & 0x3) | 0x8)).toString(16);
  });
};

export const mobile = (() => {
  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    return true;
  } else {
    return false;
  }
})()

export const scrollSetter = (elem: any) => {
  document.querySelector(elem).scrollIntoView({ behavior: "smooth", block: "start" });
}

export const API_URL = () => {
  if(window.location.href.includes('ma-cloud')) {
    return 'https://30472.hosts1.ma-cloud.nl/php-dash'
  } else {
    return 'http://127.0.0.1'
  }
};