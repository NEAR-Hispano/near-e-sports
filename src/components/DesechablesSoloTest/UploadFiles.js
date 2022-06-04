import React from "react";
import { storage } from '../../firebase/firebaseConfig'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class UploadFiles extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            storage: null,
            storageRef: null,
            uploadTask: null,
            file: null
        }
        this.asignarFile = this.asignarFile.bind(this)
        this.subirFile = this.subirFile.bind(this)
    }

    componentDidMount() {
        //this.state.storage = getStorage()
    }

    componentWillUnmount() {
    }

    subirFile() {
        this.state.uploadTask = uploadBytesResumable(this.state.storageRef, this.state.file);
        this.state.uploadTask.on('state_changed',
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
            },
            () => {
                alert("¡Se ha subido la imagen!")
                //Obtener Link al que se subio la imagen
                getDownloadURL(this.state.uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('Imagen disponible en', downloadURL);
                });
            }
        );
    }

    asignarFile(event) {
        this.state.file = event.target.files[0]
        this.state.storageRef = ref(storage, 'Imagenes-Portada-Torneo/' + this.state.file.name)
        console.log(event)
    }

    render() {

        return (
            <div>
                <br />
                <input
                    onChange={this.asignarFile}
                    type="file" />
                <br />
                <button onClick={this.subirFile}>Hi</button>
            </div>
        );

    }
}

export default UploadFiles;