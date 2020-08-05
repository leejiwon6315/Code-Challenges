import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const textHello = document.querySelector("h2");
const currentColor = textHello.style.color;

const superEventHandler = {
  rightClickFn: function rightClick() {
    if (currentColor !== colors[4]) {
      textHello.style.color = colors[4];
      textHello.innerHTML = "That was a right click!";
    }
  },

  mouseOverFn: function mouseOver() {
    if (currentColor !== colors[0]) {
      textHello.style.color = colors[0];
      textHello.innerHTML = "The mouse is here!";
    }
  },

  mouseLeaveFn: function mouseLeave() {
    if (currentColor !== colors[1]) {
      textHello.style.color = colors[1];
      textHello.innerHTML = "The mouse is gone!";
    }
  },

  windowResizeFn: function windowResize() {
    textHello.style.color = colors[2];
    textHello.innerHTML = "You just resized!";
  }
};

textHello.addEventListener("mouseover", superEventHandler.mouseOverFn);
textHello.addEventListener("mouseleave", superEventHandler.mouseLeaveFn);
window.addEventListener("contextmenu", superEventHandler.rightClickFn);
window.addEventListener("resize", superEventHandler.windowResizeFn);
