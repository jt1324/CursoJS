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
      let item = document.createElement('option')
      item.text = `Valor ${n} added`
      res.appendChild(item)
    }
  }
}

function fin() {
  let res = document.getElementById('list')
  
  if (res.value.length == 0) {
    alert('No numbers were added')
  } else {
    alert('Done')
  }
}