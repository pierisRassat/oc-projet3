export default function clearGallery () {
  const gallery = document.querySelector('.gallery')
  if (typeof (gallery) !== 'undefined' && gallery !== null) {
    while (gallery.firstChild) {
      gallery.removeChild(gallery.firstChild)
    }
  } else {
    console.error('gallery element is not set in DOM')
  }
}
