let num = document.getElementById('addtxt')
let lis = document.getElementById('list')
let res = document.querySelector('.res')
let valu = []

function isNumber(n) {
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
  return false
  }
}

function inList(n, l) { 
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function add() {
  if (isNumber(num.value) && !inList(num.value, valu)) {
    valu.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Value ${num.value} added`
    lis.appendChild(item)
    res.innerHTML = ''
  } else { 
    alert('Value invalid or already present in the list.')
  }
  num.value = ''
  num.focus()
}

function fin() {
    
  if (valu.length == 0) {
    alert('No numbers were added')
  } else {
    let tot = valu.length
    let avg = 0
    let sum = 0
    let max = valu[0]
    let min = valu[0]
    for (let pos in valu) {
      sum += valu[pos]
      if (valu[pos] > max)
        max = valu[pos]
      if (valu[pos] < min)
        min = valu[pos]
    }
    avg = sum / tot
    res.innerHTML = ''
    res.innerHTML += `<p>In total there are ${tot} numbers.</p> <p> The highest number informed was ${max}.</p> <p>The smaller number informed was ${min}.</p> <p>Summing all the values, we have ${sum}.</p> <p>The average of the number added is ${avg}.</p>`


 
  }
}