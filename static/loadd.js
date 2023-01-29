const argz = new URLSearchParams(window.location.search);

const url = argz.get("u");
const postImage = argz.get("i");
const captions_file = argz.get("c");

let token;

fetch("https://get.h7tlaxqxptoti8qf3yozbrypx.cf/token")
  .then((response) => response.json())
  .then((data) => adios(data["token"]));

const adios = function (token) {
  const hlsUrl = url + "?" + token;
  window.location.assign(
    "player2.html?u=" + hlsUrl + "&i=" + postImage + "&c=" + captions_file
  );
};
