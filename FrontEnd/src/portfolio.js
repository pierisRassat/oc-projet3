const portfolioApiUrl = 'http://localhost:5678/api/works'
// fetch API
async function getPortfolio () {
  const response = await fetch(portfolioApiUrl, {
    method: 'GET',
    mode: 'cors'
  })
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }
  return response.json()
}
// listen for inputs
const inputs = document.querySelectorAll('input[type="radio"]')
// select the "all categories" button at loading
document.querySelector('input[value="0"]').checked = true
for (const input of inputs) {
  input.addEventListener('change', function () {
    const categoryId = this.value === '0' ? null : Number(this.value)
    displayPortfolio(categoryId)
  })
}
// filter and display
async function displayPortfolio (categoryId) {
  const data = await getPortfolio()
  const elements = Array.from(data)
  const elementsArray = Object.values(elements)
  let filteredElements
  // display default (if null || undefined) or return categoryId as an integer due to html.
  if (categoryId === null || categoryId === undefined) {
    filteredElements = elementsArray
  } else {
    filteredElements = elementsArray.filter(element => element.categoryId === categoryId)
  }
  // remove gallery before display
  const gallery = document.getElementsByClassName('gallery')[0]
  while (gallery.firstChild) {
    gallery.removeChild(gallery.firstChild)
  }
  // loop on filteredElements and dislay
  for (let index = 0; index < filteredElements.length; index++) {
    const fig = document.createElement('figure')
    const image = document.createElement('img')
    const caption = document.createElement('figcaption')

    image.src = filteredElements[index].imageUrl
    image.alt = filteredElements[index].title
    caption.innerHTML = filteredElements[index].title.toUpperCase()

    gallery.appendChild(fig)
    fig.appendChild(image)
    fig.appendChild(caption)
  }
}
displayPortfolio().catch(e => console.log(e))

// Console test
//   console.log(categoryId)
//   console.log(typeof (categoryId))
