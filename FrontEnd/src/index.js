import getPortfolio from './query.js'

async function displayPortfolio (callback) {
  const data = callback()

  for (let index = 0; index < data.length; index++) {
    const fig = document.createElement('figure')
    const image = document.createElement('img')
    const caption = document.createElement('figcaption')

    image.src = data[index].imageUrl
    image.alt = data[index].title
    caption.innerHTML = data[index].title.toUpperCase() // find for another way to print the text

    document.getElementsByClassName('gallery')[0].appendChild(fig)
    fig.appendChild(image)
    fig.appendChild(caption)
  }
}

displayPortfolio(async () => await getPortfolio()).catch(e => console.log(e))

// here is trash code ;þ
//    const dataSet = new Set()
//    dataSet.add(data[index].categoryId) // search for categoryId
//    console.log(dataSet)
