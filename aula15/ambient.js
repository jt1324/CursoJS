let num = [5, 8, 4, 6, 7]
num.push(1) //add a new value to the array
num.sort() //sort the array
console.log(num)
console.log(`the array has ${num.length} positions`)
console.log(`The value of the first position is ${num[0]}`)

let pos = num.indexOf(9)
if(pos == -1) { // when teh value doesn't exist, the result is -1
  console.log('The value was not found')
} else {
console.log(`The position is ${pos}`)
}

