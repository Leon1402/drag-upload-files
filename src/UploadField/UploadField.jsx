import { useState } from 'react';
import { Gallery } from './Gallery/Gallery';
import './uploadfiles.css';


 function UploadField(props) {

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const [classes, setClasses] = useState('drop');

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
          props.handleDrop(e)
        }}>

        <form className="form">
          <p>Перетащите файлы в выделенную область</p>
          <button className="button" onClick={props.submit} disabled={!props.images.length}>Отправить</button>
        </form>
      </div>
      
      <Gallery images={props.images}/>
    </div>
  )
}

export default UploadField;