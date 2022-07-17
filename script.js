const containerActive = document.querySelector('.container')
const btnActive = document.querySelector('.btn')

btnActive.addEventListener('click', () =>{
  containerActive.classList.remove('active')
  btnActive.classList.add('active')
})