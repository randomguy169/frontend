function checkPrime() {
  let inputVal = document.getElementById("inputVal").value;
  let isPrime = true;
  for (var i = 2; i < inputVal; i++) {
    if (inputVal % i == 0) {
      isPrime = false;
      break;
    }    
  }

  if (isPrime==true) {
    console.log('number is prime');
  }
  else {
    console.log('number is NOT prime');
    
  }
}

