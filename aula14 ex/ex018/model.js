function count() {
  let sta = document.getElementById('txts')
  let res = document.querySelector('.res')
  let end = document.getElementById('txte')
  let fac = document.getElementById('txtf')
  if (sta.value.length == 0 || end.value.length == 0 || fac.value.length ==0) {
    res.innerHTML = 'Impossible to count!'
    alert('[ERROR] Missing information')
  } else {
    res.innerHTML = 'Counting: <br>'
    let s = Number(sta.value)
    let e = Number(end.value)
    let f = Number(fac.value)
    if (f <= 0) {
      alert('Factor invalid! Considering factor as 1')
      f = 1
    }
    if (s  < e) {
      //counting up
      for(let c = s; c <= e; c += f) {
          res.innerHTML += `${c} \u{1F449}` 
      }
    } else {
      //counting down
      for (let c = s; c >= e; c-= f) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }
     res.innerHTML += `\u{1F3C1}`
  }
}