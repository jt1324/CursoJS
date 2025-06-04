function check() {
  const date = new Date()
  const year = date.getFullYear()
  const fyear = document.querySelector('.txtyear')
  let res = document.querySelector('div.res')
  if (fyear.value.length == 0 || fyear.value > year) {
    alert('[ERROR] Check the information and try again!')
  } else {
    const fgend = document.getElementsByName('rad-gender')
    const age = year - Number(fyear.value)
    let gend = ''
    const img = document.createElement('img')
    img.height = 250;
    img.wisth = 250;
    img.setAttribute('class', 'pic')
    if(fgend[0].checked) {
      gend = 'Man'
      if (age >= 0 && age <= 10) {
        //boy
        img.setAttribute('src', 'images/boy-ok.png')
      } else if (age < 21) {
        //young boy
        img.setAttribute('src', 'images/young-boy-ok.png')
      } else if (age < 50) {
        //man
        img.setAttribute('src', 'images/man-ok.png')
      } else {
        //msr
        img.setAttribute('src', 'images/mrs-ok.png')
      }

    } else if (fgend[1].checked) {
      gend = 'Woman'
      if (age >= 0 && age <= 10) {
        //girl
        img.setAttribute('src', 'images/girl-ok.png')
      } else if (age < 21) {
        //young girl
        img.setAttribute('src', 'images/young-girl-ok.png')
      } else if (age < 50) {
        //woman
        img.setAttribute('src', 'images/woman-ok.png')
      } else {
        //lady
        img.setAttribute('src', 'images/lady-ok6.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detected a ${gend} with ${age} years.`
    res.appendChild(img)
    
  }
}