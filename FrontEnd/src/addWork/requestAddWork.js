import createAddWorkModale from '../addWork/createAddWorkForm.js'

export default async function addWork () {
  const endpointUrl = 'http://localhost:5678/api/works'

  const formData = new FormData()

  const titleInput = document.querySelector('input[name="add-work-title-input"]')
  const title = titleInput.value

  const fileInput = document.querySelector('input[name="add-work-file"]')
  const file = fileInput.files[0]

  const categorySelect = document.querySelector('select[id="add-work-categorie-select"]')
  const category = categorySelect.value

  formData.append('title', title)
  formData.append('image', file)
  formData.append('category', category)

  console.log(formData)

  try {
    const tokenStr = window.sessionStorage.getItem('token')
    await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenStr}`
      },
      body: formData
    })
    const addWorkModal = document.querySelector('.add-work-modal')
    if (typeof addWorkModal !== 'undefined' && addWorkModal !== null) {
      addWorkModal.remove()
      createAddWorkModale()
    }
  } catch (error) {
    console.error(error)
  }
}
