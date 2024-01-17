const colorName = document.querySelector("#color");
const button = document.querySelector(".content");
// console.log(colorName);
hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", () => {
  hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = hexColor;
  colorName.innerHTML = hexColor;
});
