import getPortfolio from './query.js'

async function showPortfolio () {
  try {
    const data = await getPortfolio()

    for (let index = 0; index < data.length; index++) {
      const fig = document.createElement('figure')
      fig.innerHTML = '<img src="' +
      data[index].imageUrl +
      '" alt="' +
      data[index].title +
      '"><figcaption>' +
      data[index].title.toUpperCase() +
      '</figcaption></figure>'
      document.getElementsByClassName('gallery')[0].appendChild(fig)
    }
  } catch (e) {
    console.log('Error', e)
  }
}

showPortfolio()
