import './gallery.css';

export function Gallery(props) {
  return (
    <div className="gallery">
      <h2 className="title">
        Загруженные изображения
        </h2>
      <div className="galleryRow">
        {
          props.images.map((image, key) => {
            return <img src={image} key={key} alt={key} />
          })
        }
      </div>
    </div>
  )
}

