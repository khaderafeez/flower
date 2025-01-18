function createFlower(e) {
  let body = document.querySelector("body");
  let flower = document.createElement("div");

  let x, y;
  if (e.touches) {
    // For touch events
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  } else {
    // For mouse events
    x = e.offsetX;
    y = e.offsetY;
  }

  flower.style.left = x + "px";
  flower.style.top = y + "px";

  let size = Math.random() * 80;
  flower.style.width = 10 + size + "px";
  flower.style.height = 10 + size + "px";

  let rotation = Math.random() * 360;
  flower.style.transform = `rotate(${rotation}deg)`;

  body.appendChild(flower);

  setTimeout(function () {
    flower.remove();
  }, 9000);
}

document.addEventListener("mousemove", createFlower);
document.addEventListener("touchmove", createFlower);
