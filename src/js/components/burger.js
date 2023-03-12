const burger = document.querySelector('.burger')
const sidebarClose = document.querySelector('.close')
const sidebar = document.querySelector('.sidebar')

function burgerMenu() {
  burger.addEventListener('click', (e) => {
    sidebar.classList.toggle('sidebar--active')
  })

  sidebarClose.addEventListener('click', (e) => {
    sidebar.classList.remove('sidebar--active')
  })

  window.addEventListener('click', (e) => {
    const target = e.target
    if (!target.closest('.sidebar') && !target.closest('.burger')) {
      sidebar.classList.remove('sidebar--active')
    }
  })
}

export default burgerMenu
