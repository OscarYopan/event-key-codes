const BoxActive = document.querySelectorAll('.box')
const btnActive = document.querySelector('.btn')
let k = document.querySelector('#key')
let kCode = document.querySelector('#key-code')
let eCode = document.querySelector('#event-code')

window.addEventListener('keydown', (event) => {
  BoxActive.forEach(box => {
    box.classList.remove('active')
  });
  btnActive.classList.add('active')
  k.innerHTML = `${event.key === ' ' ? 'Space' : event.key}`
  kCode.innerHTML = `${event.keyCode}`
  eCode.innerHTML = `${event.code}`
})