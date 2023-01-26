const portfolioApiUrl = 'http://localhost:5678/api/works'

async function getPortfolio () {
  const response = await fetch(portfolioApiUrl)
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }
  const data = await response.json()
  const container = document.getElementById('portfolio')

  for (let index = 0; index < data.length; index++) {
    const fig = document.createElement('figure')
    fig.innerHTML = '<img src="' +
      data[index].imageUrl +
      '"><figcaption>' +
      data[index].title.toUpperCase() +
      '</figcaption></figure>'
    container.appendChild(fig)
  }
}

getPortfolio()