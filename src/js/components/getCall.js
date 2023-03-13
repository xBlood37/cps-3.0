const call = document.querySelector('#call')
const callClose = document.querySelector('#call-close')
const getCall = document.querySelector('.get-call')

function getCallModal() {
  call.addEventListener('click', (e) => {
    getCall.classList.toggle('get-call--active')
  })

  callClose.addEventListener('click', (e) => {
    getCall.classList.remove('get-call--active')
  })
}

export default getCallModal
