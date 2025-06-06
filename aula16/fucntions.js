function parimp(n) {
  if (n%2 ==0) { //check if the result is divisible by 2, so it's pair or odd
    return 'pair!'
  } else {
    return 'odd!'
  }
}

let pi = parimp(11); //parameter
console.log(pi)