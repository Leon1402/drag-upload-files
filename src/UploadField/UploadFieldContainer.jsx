import React from "react";
import UploadField from "./UploadField";

export class UpdateFieldContainer extends React.Component {
  state = {
    images: []
  }

  setImages = (image) => {
    this.setState({images: [...this.state.images, image]});
  }

  render() {
    return <UploadField images={this.state.images} setImages={this.setImages} />
  };
}
