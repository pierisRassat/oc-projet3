const portfolioApiUrl = 'http://localhost:5678/api/works'

export default async function getWorkNumber () {
  const response = await fetch(portfolioApiUrl, {
    method: 'GET',
    mode: 'cors',
    'Content-Type': 'application/json;charset=utf-8'
  })
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }
  const data = await response.json()
  const ids = data.map(({ id }) => id)
  return ids
}
