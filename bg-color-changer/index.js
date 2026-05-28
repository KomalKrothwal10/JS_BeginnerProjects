//dom , event , foreach
const btn = document.querySelectorAll(".box");
const body = document.querySelector("body");

btn.forEach(function (box) {
  box.addEventListener("click", function (color) {
    if (color.target.id === "box1") {
      body.style.backgroundColor = "rgb(171, 114, 114)";
    }
    if (color.target.id === "box2") {
      body.style.backgroundColor = "rgb(138, 201, 138)";
    }
    if (color.target.id === "box3") {
      body.style.backgroundColor = "rgb(141, 141, 214)";
    }
    if (color.target.id === "box4") {
      body.style.backgroundColor = "yellow";
    }

    if (color.target.id === "box5") {
      body.style.backgroundColor = "rgba(225, 62, 25, 0.985)";
    }
  });
});
