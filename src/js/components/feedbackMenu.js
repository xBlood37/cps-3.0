const chat = document.querySelectorAll('.chat')
const formClose = document.querySelector('#form-close')
const feedback = document.querySelector('.feedback')

function feedbackMenu() {
  chat.forEach((item) => {
    item.addEventListener('click', () => {
      feedback.classList.toggle('feedback--active')
    })
  })

  formClose.addEventListener('click', (e) => {
    feedback.classList.remove('feedback--active')
  })
}

export default feedbackMenu
