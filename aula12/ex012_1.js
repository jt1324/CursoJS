const now = new Date()
//adding current date and time to the variable
const time = now.getHours()
//getting only the time form the variable above
console.log(`Now it's ${time} hours`)
//Fixed text
if(time >= 1 && time < 12) {
  console.log('Good morning!')
} else if (time <= 18) {
  console.log ('Good afternoon!')
} else if (time < 22) {
  console.log('Good evening')
} else {
  console.log('Good night!')
}