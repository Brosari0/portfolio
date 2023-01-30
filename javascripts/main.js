const titleEl = document.querySelector("#title");

titleEl.addEventListener("mousemove", (e) => {
  titleEl.style.backgroundPositionX = -e.offsetX / 10 + "px";
  titleEl.style.backgroundPositionY = -e.offsetY / 10 + "px";

});

