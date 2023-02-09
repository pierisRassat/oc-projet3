const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
  event.preventDefault()

  const email = document.querySelector('#email').value
  const password = document.querySelector('#pass').value

  console.log('Email:', email)
  console.log('Password:', password)
})

// const form = document.querySelector('form')
// form.addEventListener('submit', (event) => {
//   event.preventDefault()
// 
//   const email = document.querySelector('#email').value
//   const password = document.querySelector('#pass').value
// 
//   const data = { email, password }
// 
//   const xhr = new XMLHttpRequest()
//   xhr.open('POST', 'http://localhost:5678/api/users/login', true)
//   xhr.setRequestHeader('Content-Type', 'application/json')
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//       const response = JSON.parse(xhr.responseText)
//       console.log('Success:', response)
//     }
//   }
//   xhr.send(JSON.stringify(data))
// })

