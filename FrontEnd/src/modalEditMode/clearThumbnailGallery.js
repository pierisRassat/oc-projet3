export default function clearThumbnailGallery () {
  const thumbnailGallery = document.querySelector('.thumbnail-portfolio-container')
  if (typeof (thumbnailGallery) !== 'undefined' && thumbnailGallery !== null) {
    thumbnailGallery.remove()
  }
}
