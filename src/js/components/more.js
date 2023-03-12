const brandsInner = document.querySelector('.brands__inner')
const categoryInner = document.querySelector('.category__inner')
const moreButton = document.querySelectorAll('.more')

function textContentChanged(item) {
  return item.textContent === 'Cкрыть' ? (item.textContent = 'Показать все') : (item.textContent = 'Cкрыть')
}

function getMoreCard() {
  moreButton.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.id === 'brands' && e.target.id !== '') {
        brandsInner.classList.toggle('brands__inner--toogle')
        textContentChanged(item)
      }
      if (e.target.id === 'category' && e.target.id !== '') {
        categoryInner.classList.toggle('category__inner--toogle')
        textContentChanged(item)
      }
    })
  })
}

export default getMoreCard
