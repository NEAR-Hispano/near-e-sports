import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

import { Button } from "reactstrap";

import defaultImage from "../../assets/img/image_placeholder.jpg";
import defaultAvatar from "../../assets/img/placeholder.jpg";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase/firebaseConfig';


class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage,
    };
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }
  handleSubmit(e) {
    let uploadTask = uploadBytesResumable(ref(storage, 'Imagenes-Portada-Torneo/'+this.state.file.name), this.state.file);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        alert("error when uploading image")
      },
      () => {
        alert("image uploaded sucessfully")
        //Obtener Link al que se subio la imagen
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("Imagen subida a: " + downloadURL)
          this.props.uploadPhoto(downloadURL)
        });
      }
    );
  }
  handleClick() {
    this.refs.fileInput.click();
  }
  handleRemove() {
    this.setState({
      file: null,
      imagePreviewUrl: this.props.avatar ? defaultAvatar : defaultImage,
    });
    this.refs.fileInput.value = null;
    this.props.removePhoto()
  }
  render() {
    return (
      <div className="fileinput text-center">
        <input type="file" onChange={this.handleImageChange} ref="fileInput" />
        <div className={"thumbnail" + (this.props.avatar ? " img-circle" : "")}>
          <img src={this.state.imagePreviewUrl} alt="..." />
        </div>
        <div>
          {this.state.file === null ? (
            <Button
              color={this.props.addBtnColor}
              className={this.props.addBtnClasses}
              onClick={() => this.handleClick()}
            >
              {this.props.avatar ? "Add Photo" : "Subir"}
            </Button>
          ) : (
            <span>
              <Button
                color={this.props.removeBtnColor}
                className={this.props.changeBtnClasses}
                onClick={() => this.handleClick()}
              >
                <i className="fa fa-times" /> Change
              </Button>
              {this.props.avatar ? <br /> : null}
              <Button
                color={this.props.removeBtnColor}
                className={this.props.removeBtnClasses}
                onClick={() => this.handleRemove()}
              >
                <i className="fa fa-times" /> Remove
              </Button>
              <Button
                color={this.props.removeBtnColor}
                className={this.props.removeBtnClasses}
                onClick={() => this.handleSubmit()}
              >
                <i className="fa fa-times" /> Subir
              </Button>
            </span>
          )}
        </div>
      </div>
    );
  }
}

ImageUpload.defaultProps = {
  avatar: false,
  removeBtnClasses: "btn-round",
  removeBtnColor: "danger",
  addBtnClasses: "btn-round",
  addBtnColor: "file",
  changeBtnClasses: "btn-round",
  changeBtnColor: "file",
};

ImageUpload.propTypes = {
  avatar: PropTypes.bool,
  removeBtnClasses: PropTypes.string,
  removeBtnColor: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link",
    "file",
  ]),
  addBtnClasses: PropTypes.string,
  addBtnColor: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link",
    "file",
  ]),
  changeBtnClasses: PropTypes.string,
  changeBtnColor: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link",
    "file",
  ]),
};

export default ImageUpload;
