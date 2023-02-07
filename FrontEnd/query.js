import { handleError } from './error-handler.js'

const portfolioApiUrl = 'http://localhost:5679/ap/works'

const fetchPortfolio = async () => {
  try {
    const response = await fetch(portfolioApiUrl, {
      method: 'GET',
      mode: 'cors'
    })
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    handleError(error)
  }
}
export default fetchPortfolio
// const portfolioApiUrl = 'http://localhost:5678/api/works'
// 
// export const handleError = error => {
//   console.error(error)
// }
// 
// const fetchPortfolio = async () => {
//   try {
//     const response = await fetch(portfolioApiUrl, {
//       method: 'GET',
//       mode: 'cors'
//     })
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`)
//     }
//     return response.json()
//   } catch (error) {
//     handleError(error)
//   }
// }
// 
// export default fetchPortfolio
