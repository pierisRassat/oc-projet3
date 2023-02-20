export default function handleLoginFormSubmit () {
  const loginForm = document.querySelector('#login form')

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const email = document.querySelector('#login input[type="email"]').value
    const password = document.querySelector('#login input[type="password"]').value

    console.log(email, password)
  })
}
