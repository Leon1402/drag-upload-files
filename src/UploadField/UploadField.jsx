import { useState } from 'react';
import './uploadfiles.css';

 function UploadField(props) {
  function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
  }
  const [classes, setClasses] = useState('drop');
  

  function previewFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
      props.setImages(reader.result)
    }
  }

  function handleDrop(e) {
    let files = e.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      previewFile(files[i])
    }
  }


  return (
    <div className="wrapper">
      <div
        className={classes}
        onDragEnter={(e) => {
          preventDefaults(e);
          setClasses('drop active');
        }}
        onDragOver={(e) => {
          preventDefaults(e);
          setClasses('drop active');
        }}
        onDragLeave={(e) => {
          preventDefaults(e);
          setClasses('drop');
        }}
        onDrop={(e) => {
          preventDefaults(e);
          setClasses('drop');
          handleDrop(e)
        }}>
        <form className="form">
          <p>Перетащите файлы в выделенную область</p>

        </form>
      </div>
      <div className="gallery">
        <h2 className="title">
          Загруженные изображения
        </h2>
        {
          props.images.map((image, key) => {
            return <img src={image} key={key} alt={key}/>
          })
        }
      </div>
    </div>
  )
}

export default UploadField