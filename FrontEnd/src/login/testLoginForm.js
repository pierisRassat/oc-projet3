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
      const token = await response.json().token
      // stocker le token dans le local storage pour une utilisation ultérieure
      localStorage.setItem('token', token)
      // rediriger l'utilisateur vers la page souhaitée
      window.location.href = '/dashboard'
    } else {
      const errorMessage = await response.json().message
      // afficher un message d'erreur à l'utilisateur
      alert(errorMessage)
    }
  })
}

// export default function handleLoginFormSubmit () {
//   const loginForm = document.querySelector('#login form input#submitLoginForm ')
//
//   loginForm.addEventListener('submit', async (event) => {
//     event.preventDefault()
//
//     const email = document.querySelector('#login input[type="email"]').value
//     const password = document.querySelector('#login input[type="password"]').value
//
//     console.log(email, password)
//   })
// }
