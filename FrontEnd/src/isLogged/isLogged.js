import createEditionBanner from './createEditionBanner.js'
import { createEditionButton, createEditionProjectsButton, replaceLoginElement } from './createEditionButtons.js'
import addLoginListener from '../login/addLoginListener.js'
import addEditListener from '../modalEditMode/addEditListener.js'

export function checkLocalStorageToken () {
  const isTokenStored = window.sessionStorage.getItem('token')
  if (isTokenStored) {
    createEditionBanner()
    createEditionButton()
    createEditionProjectsButton()
    replaceLoginElement()
    addEditListener()
  } else {
    addLoginListener()
  }
}
