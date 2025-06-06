function generate() {
  let num = document.getElementById('addtxt')
  let res = document.getElementById('seltab')
  if(num.value.length == 0) {
    alert('Please add a number')
  } else { 
    let n = Number(num.value)
    let c = 1
    res.innerHTML = '' //clean previous result
    while (c <=10) {
      let item = document.createElement('option') //add <option> in HTML from JS
      item.text = `${n} x ${c} = ${n*c}` 
      res.appendChild(item) //add items inside <select>, like <options>
      c++
    }

  }

}