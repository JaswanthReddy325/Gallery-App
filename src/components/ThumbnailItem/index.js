// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {images, setActiveThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = images
  const onUpdate = () => {
    setActiveThumbnail(id)
  }
  const activeTabClass = isActive ? 'image2' : 'image1'

  return (
    <li>
      <button type="button" onClick={onUpdate}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`${activeTabClass}`}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
