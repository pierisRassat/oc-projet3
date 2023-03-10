import addWork from './requestAddWork.js'

export default function initAddWorkForm () {
  const submitButton = document.querySelector('#submit-button-add-work-form')

  function validateForm () {
    const fileInput = document.querySelector('input[name="add-work-file"]')
    const titleInput = document.querySelector('input[name="add-work-title-input"]')
    const categorySelect = document.querySelector('select[id="add-work-categorie-select"]')

    if (fileInput.value && titleInput.value && categorySelect.value !== 'blank-value') {
      submitButton.disabled = false
      submitButton.style.backgroundColor = '#1d6154'
      submitButton.style.border = '1px solid #1d6154'
    } else {
      submitButton.disabled = true
      submitButton.style.backgroundColor = '#a7a7a7'
      submitButton.style.border = '1px solid #a7a7a7'
    }
  }

  function displayImagePreview () {
    const fileInput = document.querySelector('input[name="add-work-file"]')
    const file = fileInput.files[0]

    if (file) {
      const reader = new FileReader()

      reader.addEventListener('load', () => {
        const image = new Image()
        image.src = reader.result
        image.setAttribute('class', 'add-work-preview-img')

        image.addEventListener('load', () => {
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')

          canvas.width = 129
          canvas.height = (canvas.width / image.width) * image.height

          context.drawImage(image, 0, 0, canvas.width, canvas.height)

          const fileInputContainer = document.querySelector('.add-work-file-input-container')
          const fileInputLabel = fileInputContainer.querySelector('label[for="add-work-file"]')
          const fileInputIcon = fileInputContainer.querySelector('.add-work-file-input-icon')
          const fileInputDescription = fileInputContainer.querySelector('p')

          fileInputLabel.style.display = 'none'
          fileInputIcon.style.display = 'none'
          fileInputDescription.style.display = 'none'

          fileInputContainer.appendChild(image)
        })
      })

      reader.readAsDataURL(file)
    }
  }

  document.querySelectorAll('input, select').forEach((element) => {
    element.addEventListener('change', () => {
      validateForm()
      if (element.name === 'add-work-file') {
        displayImagePreview()
      }
    })
  })

  submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    addWork()
  })
}
