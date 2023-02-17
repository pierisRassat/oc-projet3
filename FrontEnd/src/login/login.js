const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
  const email = document.querySelector('#email').value
  const password = document.querySelector('#pass').value

  console.log('Email:', email)
  console.log('Password:', password)
})
