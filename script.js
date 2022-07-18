const dataBoxActive = document.querySelectorAll('.data-box')
const btnActive = document.querySelector('.btn')
let key = document.querySelector('#key')
let keyCode = document.querySelector('#key-code')
let eventCode = document.querySelector('#event-code')
let Keyboard = '--'

window.addEventListener('keydown', (event) => {
  dataBoxActive.classList.remove('active')
  btnActive.classList.add('active')
  key.innerHTML = `${event.key === ' ' ? 'Space' : event.key}`
  keyCode.innerHTML = `${event.keyCode}`
  eventCode.innerHTML = `${event.eventCode}`
})

// btnActive.addEventListener('click', (event) =>{
//   dataBoxActive.classList.remove('active')
//   btnActive.classList.add('active')
//   key.innerHTML = `${event.key === ' ' ? 'Space' : event.key}`
//   keyCode.innerHTML = `${event.keyCode}`
//   eventCode.innerHTML = `${event.eventCode}`
// })

// key.addEventListener('KeyboardEvent()', () => {
//   key.innerHTML = `${Keyboard}`
//   keyCode.innerHTML = `${Keyboard}`
//   eventCode.innerHTML = `${Keyboard}`
// })