function add() {
  let num = document.getElementById('addtxt')
  let lis = document.getElementById('list')
  if (num.value.length == Number(0)) {
    alert('Please add a number')
  } else { 
    let n = Number(num.value)
    if (n > 100) {
      alert('Please add a numbe between 1 and 100')
    } else {
      let item = document.createElement('option')
      item.text = `Valor ${n} added`
      lis.appendChild(item)
    }
  }
}

function fin() {
  let lis = document.getElementById('list')
  let res = document.querySelector('.res')
  if (lis.value.length == 0) {
    alert('No numbers were added')
  } else {
    res.innerHTML = 'In total tehre are X numbers.</b> The highest number informed was X.</b> The smaller number informed was X.</b> Summing all the values, we have x.</b> The average of the number added is x.'
  }
}