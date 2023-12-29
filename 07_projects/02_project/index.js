const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const message = document.querySelector("#message");
  const resultBMI = (weight / ((height * height) / 10000)).toFixed(2);
  results.innerHTML = `${resultBMI}`;
  if (resultBMI < 18.6) {
    message.innerHTML = "You are underweight";
  }
  if (resultBMI > 24.9) {
    message.innerHTML = "You are overweight";
  }
  if (resultBMI > 18.6 && resultBMI < 24.9) {
    message.innerHTML = "You are normal";
  }
});
