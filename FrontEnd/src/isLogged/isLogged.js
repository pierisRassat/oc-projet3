import createEditionBanner from './createEditionBanner.js'
import { createEditionButtons, createEditionProjectsButton } from './createEditionButtons.js'

export function checkLocalStorageToken () {
  const isTokenStored = window.localStorage.getItem('token')
  if (isTokenStored) {
    console.log('Token stored in localStorage')
    createEditionBanner()
    createEditionButtons()
    createEditionProjectsButton()
  } else {
    console.log('Token not stored in localStorage')
  }
}
