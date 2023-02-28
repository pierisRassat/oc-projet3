import createEditionBanner from './createEditionBanner.js'
import { createEditionButton, createEditionProjectsButton } from './createEditionButtons.js'

export function checkLocalStorageToken () {
  const isTokenStored = window.localStorage.getItem('token')
  if (isTokenStored) {
    console.log('Token stored in localStorage')
    createEditionBanner()
    createEditionButton()
    createEditionProjectsButton()
  } else {
    console.log('Token not stored in localStorage')
  }
}
