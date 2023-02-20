export default async function handleLoginFormSubmit (event) {
  console.log('fonction handleLoginFormSubmit called')
  event.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  console.log(email)
  console.log(password)

  try {
    const response = await fetch('http://localhost:5678/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    if (!response.ok) {
      throw new Error('Identifiants incorrects')
    }

    const data = await response.json()
    const { userId, token } = data

    const expires = new Date()
    expires.setHours(expires.getHours() + 1) // expire dans 1 heure
    document.cookie = `auth_token=${token};expires=${expires.toUTCString()};secure;SameSite=Strict`

    // Rediriger vers la page de profil de l'utilisateur connecté
    window.location.href = 'index.html'
  } catch (error) {
    console.error(error)
    // Afficher un message d'erreur à l'utilisateur
  }
}

const loginForm = document.querySelector('nav ul li#login')
loginForm.addEventListener('submit', handleLoginFormSubmit)
