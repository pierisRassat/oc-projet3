const categoriesApiUrl = 'http://localhost:5678/api/categories'

export async function getCategories () {
  const response = await fetch(categoriesApiUrl, {
    method: 'GET',
    mode: 'cors',
    'Content-Type': 'application/json;charset=utf-8'
  })
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }

  const categories = await response.json()

  const categoriesSet = new Set()

  categories.forEach(category => {
    const categoryWithKey = { ...category, key: Date.now() } // Add unique property to each categorie
    categoriesSet.add(categoryWithKey)
  })

  return Array.from(categoriesSet)
}
