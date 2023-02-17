const portfolioApiUrl = 'http://localhost:5678/api/works'

export default async function getPortfolio () {
  const response = await fetch(portfolioApiUrl, {
    method: 'GET',
    mode: 'cors'
  })
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }
  return {
    data: await response.json(),
    filter: function (categoryId) {
      return categoryId
        ? this.data.filter(
          ({ categoryId: id }) => id === categoryId)
        : this.data
    }
  }
}
