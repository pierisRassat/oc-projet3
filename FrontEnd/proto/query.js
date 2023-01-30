const portfolioApiUrl = 'http://localhost:5678/api/works'

export default async function getPortfolio () {
  const response = await fetch(portfolioApiUrl, {
    method: 'GET',
    mode: 'cors'
  })
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }
  return response.json()
}
