let remainingAttempts = 5;
const randomNumber = Math.random(1, 9).toFixed(1) * 10 + 1;
// document.getElementById("randomNumberElement").innerHTML = randomNumber;

document.getElementById("attemptCount").innerHTML = remainingAttempts;
function check() {
  if (remainingAttempts > 0) {
    const userInput = document.querySelector(".inputbox").value;
    //   const winMessage = "Correct you got it!";
    const messageBox = document.querySelector(".message");

    if (Number(userInput) === randomNumber) {
      messageBox.innerHTML = "you win";
      messageBox.style.color = "green";
      messageBox.style.fontSize = "xx-large";

      setInterval(function () {
        location.reload();
      }, 5000);
    } else {
      messageBox.innerHTML = "incorrect";
      remainingAttempts--;
      document.getElementById("attemptCount").innerHTML = remainingAttempts;
      messageBox.style.fontSize = "xx-large";
    }
  }
  if (remainingAttempts === 0) {
    const messageBox = document.querySelector(".message");
    messageBox.style.color = "red";
    messageBox.style.fontSize = "xx-large";
    messageBox.innerHTML = "Game over";
    setInterval(function () {
      location.reload();
    }, 5000);
  }
}
