const colorName = document.querySelector("#color");
const button = document.querySelector(".content");
// // console.log(colorName);
// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// button.addEventListener("click", () => {
//   hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[Math.floor(Math.random() * 16)];
//   }
//   document.body.style.backgroundColor = hexColor;
//   colorName.innerHTML = hexColor;
// });

const headerElement = document.getElementById("headerElement");

button.addEventListener("click", () => {
  console.clear();
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);

  let textColor = "";
  if (isColorDark(R, G, B)) {
    console.log("DARK COLOR");
    textColor = "white";
  } else {
    console.log("LIGHT COLOR");
    textColor = "black";
  }

  document.body.style.backgroundColor = `rgb(${R},${G},${B})`;
  headerElement.style.color = textColor;

  // R = R == 0 ? 1 : R;
  // G = G == 0 ? 1 : G;
  // B = B == 0 ? 1 : B;
  // let colorCombinationVal = R * G * B;

  // let maxValue = 255 ** 3;
  // let considerDarkValue = maxValue * (15 / 100);

  // console.log(`colorCombinationVal:${colorCombinationVal}`);
  // console.log(`considerDarkValue:${considerDarkValue}`);
  // // console.log(`Max valus:${255 * 255 * 255}`); //16581375

  // console.log(`R:${R},G:${G},B:${B}`);

  // headerElement;
  colorName.textContent = `RGB: ${R}, ${G}, ${B}`;
});

// button.onkeyup = () => {
//   hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[Math.floor(Math.random() * 16)];
//   }
//   document.body.style.backgroundColor = hexColor;
//   colorName.innerHTML = hexColor;
// };
function isColorDark(r, g, b) {
  // Convert RGB values to the range [0, 1]
  const normalizedR = r / 255;
  const normalizedG = g / 255;
  const normalizedB = b / 255;

  // Calculate relative luminance
  const luminance =
    0.299 * normalizedR + 0.587 * normalizedG + 0.114 * normalizedB;

  // You can adjust the threshold based on your preference
  const threshold = 0.5;

  // Return true if the color is considered dark, false otherwise
  return luminance < threshold;
}
