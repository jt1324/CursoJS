function load() {
  const img = document.querySelector('.img')
  const msg = document.querySelector('.msg')
  const date = new Date()
  const hour = date.getHours()
  
  msg.innerHTML = `Now is ${hour} hours.`
  if (hour >= 0 && hour < 12) {
    img.src = 'images/mor.png'
    document.body.style.background =' #e9c46a'
  } else if ( hour >=12 && hour <= 18) {
    img.src = 'images/aft.png'
    document.body.style.background = 'rgb(249, 122, 0)'
  } else {
    img.src = 'images/nig.png'
    document.body.style.background = 'rgb(37, 77, 112)'
  }
}

