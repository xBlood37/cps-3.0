const chat = document.querySelector('#chat')
const formClose = document.querySelector('#form-close')
const feedback = document.querySelector('.feedback')

function feedbackMenu() {
  chat.addEventListener('click', (e) => {
    feedback.classList.toggle('feedback--active')
  })

  formClose.addEventListener('click', (e) => {
    feedback.classList.remove('feedback--active')
  })
}

export default feedbackMenu
