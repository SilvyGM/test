const redcolor = document.querySelector(".red");
const blackcolor = document.querySelector(".black");
const graycolor = document.getElementsByClassName("gray");
const botonFeedback = document.querySelector(".feedback");
const imagecard = document.querySelector(".product-image");
const carBoton = document.getElementById("button");
const itemTag = document.querySelector("h3");

redcolor.addEventListener("click", function () {
  carBoton.style.backgroundColor = "red";
  itemTag.style.backgroundColor = "red";
  imagecard.style.backgroundImage =
    'url("https://i.postimg.cc/cH2pJdny/red-benz.webp")';
});
blackcolor.addEventListener("click", function () {
  carBoton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imagecard.style.backgroundImage =
    'url("https://i.postimg.cc/NGRJX8hr/black-benz.jpg")';
});
graycolor[0].addEventListener("click", function () {
  carBoton.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
  imagecard.style.backgroundImage =
    'url("https://i.postimg.cc/BvyYTMQ2/gray-benz.jpg")';
});

const cart = () => {
  carBoton.style.display = "none";
  botonFeedback.style.display = "block";
};
carBoton.addEventListener("click", cart);

const feedback = () => {
  carBoton.style.display = "block";
  botonFeedback.style.display = "none";
};
botonFeedback.addEventListener("click", feedback);
