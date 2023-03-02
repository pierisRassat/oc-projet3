export default function clearThumbnailGallery () {
  const thumbnailGallery = document.querySelector('.thumbnail-portfolio-container')
  if (typeof (thumbnailGallery) !== 'undefined' && thumbnailGallery !== null) {
    while (thumbnailGallery.firstChild) {
      thumbnailGallery.removeChild(thumbnailGallery.firstChild)
    }
  } else {
    console.error('thumbnailGallery element is not set in DOM')
  }
}
