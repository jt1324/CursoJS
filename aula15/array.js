let value = [8, 2, 7, 3, 2 ,6 ,4 ,10]

//option 1 - not used, only for demonstration
console.log(value[0])
console.log(value[1])
console.log(value[2])
console.log(value[3])
console.log(value[4])
console.log(value[5])
console.log(value[6])
console.log(value[7])

//using FOR
for(let pos=0; pos<value.length; pos++) {
  console.log(value[pos])
}

//Using FOR IN
for (let pos in value) {
  console.log(value[pos])
}

let poss = value.indexOf(7)
console.log(poss)