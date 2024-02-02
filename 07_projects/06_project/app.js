let input = document.querySelector("#input");
let submitButton = document.querySelector("#submitButton");
let list = document.getElementById("List");
let newContainer;

function toggleStrikethrough(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("striked-li");
  }
}

submitButton.addEventListener("click", () => {
  var inputVal = input.value;
  let newContainer = document.createElement("li");
  newContainer.innerHTML = inputVal;

  const removeButton = document.createElement("button");
  removeButton.classList.add("cross");
  removeButton.innerHTML = "\u00D7";

  newContainer.appendChild(removeButton);
  list.appendChild(newContainer);
  input.value = "";

  removeButton.onclick = () => {
    let div = removeButton.parentElement;
    div.style.display = "none";
  };
});
