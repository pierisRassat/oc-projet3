import getPortfolio from './query.js'

async function displayPortfolio () {
  const data = await getPortfolio()

  for (let index = 0; index < data.length; index++) {
    console.log(data[index].categoryId) // search for categoryId

    const fig = document.createElement('figure')
    const image = document.createElement('img')
    const caption = document.createElement('figcaption')

    image.src = data[index].imageUrl
    image.alt = data[index].title
    caption.innerHTML = data[index].title.toUpperCase() // find for another way to print text

    document.getElementsByClassName('gallery')[0].appendChild(fig)
    fig.appendChild(image)
    fig.appendChild(caption)
  }
}

displayPortfolio().catch(e => console.log(e))
