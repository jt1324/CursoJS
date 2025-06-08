function add() {
  let num = document.getElementById('addtxt')
  let res = document.getElementById('list')
  if (num.value.length == Number(0)) {
    alert('Please add a number')
  } else { 
    let n = Number(num.value)
    if (n > 100) {
      alert('Please add a numbe between 1 and 100')
    } else {
      alert('OK')
    }
  }
}