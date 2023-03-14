const call = document.querySelectorAll('.call')
const callClose = document.querySelector('#call-close')
const getCall = document.querySelector('.get-call')

function getCallModal() {
  call.forEach((item) => {
    item.addEventListener('click', () => {
      getCall.classList.add('get-call--active')
    })
  })

  callClose.addEventListener('click', (e) => {
    getCall.classList.remove('get-call--active')
  })
}

export default getCallModal
