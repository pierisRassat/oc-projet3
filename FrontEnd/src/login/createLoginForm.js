import handleLoginFormSubmit from './testLoginForm.js'

export default function createLoginForm () {
  const section = document.createElement('section')
  section.setAttribute('id', 'login')

  const title = document.createElement('h2')
  title.textContent = 'Log in'
  section.appendChild(title)

  const form = document.createElement('form')
  // form.setAttribute('action', './login.js')
  form.setAttribute('method', 'post')

  const emailLabel = document.createElement('label')
  emailLabel.setAttribute('for', 'email')
  emailLabel.textContent = 'E-mail'
  form.appendChild(emailLabel)

  const emailInput = document.createElement('input')
  emailInput.setAttribute('type', 'email')
  emailInput.setAttribute('name', 'email')
  emailInput.setAttribute('id', 'email')
  emailInput.setAttribute('required', '')
  form.appendChild(emailInput)

  const passLabel = document.createElement('label')
  passLabel.setAttribute('for', 'pass')
  passLabel.textContent = 'Mot de passe'
  form.appendChild(passLabel)

  const passInput = document.createElement('input')
  passInput.setAttribute('type', 'password')
  passInput.setAttribute('name', 'password')
  passInput.setAttribute('id', 'pass')
  passInput.setAttribute('required', '')
  form.appendChild(passInput)

  const submitInput = document.createElement('input')
  submitInput.setAttribute('type', 'submit')
  submitInput.setAttribute('id', 'submitLoginForm')
  submitInput.setAttribute('value', 'Se connecter')
  form.appendChild(submitInput)

  section.appendChild(form)

  const forgotPasswordLink = document.createElement('a')
  forgotPasswordLink.setAttribute('href', 'forgoten-password')
  forgotPasswordLink.textContent = 'Mot de passe oublié'
  section.appendChild(forgotPasswordLink)

  const selected = document.querySelector('nav ul li#login')
  selected.style.fontWeight = 'bold'

  form.addEventListener('submit', handleLoginFormSubmit)
  return section
}
