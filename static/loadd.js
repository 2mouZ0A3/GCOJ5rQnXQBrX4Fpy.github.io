const argz = new URLSearchParams(window.location.search);

const url = argz.get("u");
const postImage = argz.get("i");
const captions_file = argz.get("c");

let token;

fetch("https://get.h7tlaxqxptoti8qf3yozbrypx.cf/token")
  .then((response) => response.json())
  .then((data) => adios(data["token"]));

const adios = function (token) {
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  const hlsUrl = url + "?" + token;

  if (isMobile.iOS()) {
    window.location.assign("mob.html?u=" + hlsUrl + "&i=" + postImage + "&c=" + captions_file);
  } else {
    window.location.assign(
      "player2.html?u=" + hlsUrl + "&i=" + postImage + "&c=" + captions_file
    );
  }
};
