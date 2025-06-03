const now = new Date()
//adding current date and time to the variable
const wday = now.getDay()
//getting only the day from the variable above (day number)
/*
  0 = Sun
  1 = Mon
  2 = Tue
  3 = Wed
  4 = Thu
  5 = Fri
  6 = Sat
*/
let res //creating a variable to store the result
switch (wday) {
  case 0:
    res = 'Sun'
    break
  case 1:
    res = 'Mon'
    break
  case 2:
    res = 'Tue'
    break
  case 3:
    res = 'Wed'
    break
  case 4:
    res = 'Thu'
    break
  case 5:
    res = 'Fri'
    break
  case 6:
    res = 'Sat'
    break
  default:
    res = 'Invalid!!!'
}

console.log(`Today is ${res}`)
// adding the result to the final text