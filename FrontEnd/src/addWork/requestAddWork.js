import createAddWorkModale from '../addWork/createAddWorkForm.js'

export default async function addWork () {
  const endpointUrl = 'http://localhost:5678/api/works'

  const formData = new FormData()

  const fileInput = document.querySelector('input[name="add-work-file"]')
  const file = fileInput.files[0]
  formData.append('file', file)

  const titleInput = document.querySelector('input[name="add-work-title-input"]')
  const title = titleInput.value
  formData.append('title', title)

  const categorySelect = document.querySelector('select[id="add-work-categorie-select"]')
  const category = categorySelect.value
  formData.append('category', category)

  console.log(formData)

  try {
    const tokenStr = window.sessionStorage.getItem('token')
    await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${tokenStr}`,
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    })
    const addWorkModal = document.querySelector('.add-work-modal')
    if (typeof addWorkModal !== 'undefined' && addWorkModal !== null) {
      createAddWorkModale()
    }
  } catch (error) {
    console.error(error)
  }
}
