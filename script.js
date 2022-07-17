const containerActive = document.querySelector('.container')
const btnActive = document.querySelector('.btn')
let key = document.querySelector('#key')
let keyCode = document.querySelector('#key-code')
let eventCode = document.querySelector('#event-code')
let Keyboard = '--'

btnActive.addEventListener('click', () =>{
  containerActive.classList.remove('active')
  btnActive.classList.add('active')
  key.innerHTML = `${Keyboard}`
  keyCode.innerHTML = `${Keyboard}`
  eventCode.innerHTML = `${Keyboard}`
})

// key.addEventListener('KeyboardEvent()', () => {
//   key.innerHTML = `${Keyboard}`
//   keyCode.innerHTML = `${Keyboard}`
//   eventCode.innerHTML = `${Keyboard}`
// })