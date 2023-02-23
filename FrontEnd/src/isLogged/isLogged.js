export function checkLocalStorageToken () {
  const isTokenStored = localStorage.getItem('token')
  if (isTokenStored) {
    console.log('Token stored in localStorage')
    return true
  } else {
    console.log('Token not stored in localStorage')
    return false
  }
}
