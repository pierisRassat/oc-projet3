export default async function deleteWork (listenerNumber) {
  const endpointUrl = `http://localhost:5678/api/works/${listenerNumber}`

  try {
    const tokenStr = window.sessionStorage.getItem('token')
    console.log('tokenStr vaut : ', tokenStr)
    console.log('tokenStr est de type : ', typeof (tokenStr))
    const tokenObj = JSON.parse(tokenStr)
    console.log('tokenObj vaut : ', tokenObj)
    console.log('tokenObj est de type : ', typeof (tokenObj))
    const tokenValue = tokenObj.token
    console.log('tokenValue vaut : ', tokenValue)
    console.log('tokenValue est de type : ', typeof (tokenValue))
    const response = await fetch(endpointUrl, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${tokenValue}`,
        'Content-Type': 'application/json'
      }
    })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
