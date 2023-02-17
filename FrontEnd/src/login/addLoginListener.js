import createLoginForm from './createLoginForm.js'

export default function addLoginListener () {
  const loginButton = document.querySelector('nav ul li#login')
  const main = document.querySelector('main')

  loginButton.addEventListener('click', () => {
    while (main.firstChild) {
      main.removeChild(main.firstChild)
    }

    main.appendChild(createLoginForm())
  })
}
