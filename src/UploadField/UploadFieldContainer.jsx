import React from "react";
import UploadField from "./UploadField";

export class UpdateFieldContainer extends React.Component {
  state = {
    images: []
  }

  setImages = (image) => {
    this.setState({ images: [...this.state.images, image] });
  }

  previewFile = (file) => {
    if (file.type.includes("image/")) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (!this.state.images.includes(reader.result)) {
          this.setImages(reader.result);
        } else return;
      }
    } else return;
  };

  submit = (e) => {
    e.preventDefault();
    console.log(this.state.images);
  }

  handleDrop = (e) => {
    let files = e.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      this.previewFile(files[i]);
    }
  }

  render() {
    return <UploadField
      images={this.state.images}
      handleDrop={this.handleDrop}
      submit={this.submit} />
  };
}
