export default async function handleLoginFormSubmit () {
  const loginForm = document.querySelector('#login form')

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const email = document.querySelector('#login input[type="email"]').value
    const password = document.querySelector('#login input[type="password"]').value

    const response = await fetch('http://localhost:5678/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    if (response.ok) {
      const token = await response.json()
      window.localStorage.setItem('token', token)
      window.location.href = 'index.html'
    } else {
      const errorMessage = await response.json().message
      window.alert('Email ou mot de passe incorrect')
      window.message('Allo ?')
      console.error(errorMessage)
    }
  })
}
