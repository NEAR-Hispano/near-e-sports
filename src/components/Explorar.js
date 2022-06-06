import React, { useEffect, useState } from "react";
import Placeholder from 'react-bootstrap/Placeholder';
import { Container, Row, Col, Button,Form,Card } from 'react-bootstrap';
import LOL_Logo from '../assets/LOL_Logo.webp';

import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'
import { storage } from '../firebase/firebaseConfig'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Explorar() {
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [plataform,setPlataform] = useState("");
  const [dateinicio,setDateinicio] = useState("");
  const [cost,setCost] = useState("");
  const [file,setFile] = useState();
  const [storageRef,setStorageRef] = useState();
  const [id,setId] = useState("");
  const [image, setImage] = useState(LOL_Logo);
  const Array = [];

  const Crear_Torneo = async()=> {
    /*
    await window.contract.new({
      owner_id : window.accountId,
      vault_id: window.accountId

    })

    console.log(window.accountId)
    */
   if(storageRef === undefined){
     return alert("photo is missing");
   }
    try {
      const docRef = await addDoc(collection(db, "torneos"), {
        nombre: name,
        descripcion: description,
        plataforma: plataform,
        imgUrl: image,
        fechaInicio: dateinicio,
        cost: cost,
        winner: "Sin ganador aun"

      });

      console.log("Document written with ID: ", docRef.id);
      setId(docRef.id)

    } catch (e) {
      //console.error("Error adding document: ", e);

      alert(e)

    }
    await window.contract.create_tournament({ 
      name:name,
      description:description,
      date:dateinicio,
      winner:plataform,
      cost:cost,
      teams: Array,
      firebase_index:id,
      
    })
    alert("¡Se ha creado un nuevo torneo!")
    console.log(window.accountId)
    
  } 

  useEffect(()=>{
    if(file !== undefined){
      setStorageRef(ref(storage, 'Imagenes-Portada-Torneo/'+file.name))
    }
  },[file])

  //GESTION DE IMAGEN PARA EL TORNEO A CREAR
  const assignFile = (event) => {
    setFile(event.target.files[0]);
  }

  const uploadFile = () => {
    let uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        setImage("https://gifburg.com/images/gifs/loading/gifs/0008.gif");
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
          setImage(downloadURL);
          console.log("Imagen subida a: " + downloadURL)
        });
      }
    );
  }
    return (
      <div>

        <Container  className="text-blanco mt-5">
          <Row md={12} lg={12} xl={12} className="home__container">
            <Card bg="dark" border="dark" > 
            <Row xs={5} md={1} lg={1} xl={1} className='mb-5 mt-4' >
              <h2 style={{textAlign: 'center'}}>Crear torneo</h2>
            </Row>
            <Row md={12} lg={12} xl={12} > 
              <Col md={6} lg={6} xl={6}> 
                <Form>
                  <Form.Group className="mb-5 mt-1" controlId="formBasicEmail">
                  <Row className='mb-5 mt-5' >
                  <Col md={3} lg={3} xl={3}>
                    <Form.Label> Nombre del torneo</Form.Label>
                  </Col> 
                  <Col md={9} lg={9} xl={9} >
                    <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Ingresa El nombre del torneo" />
                  </Col > 
                  </Row> 
                  </Form.Group>

                  <Form.Group className="mb-5 " controlId="formBasicEmail">
                  <Row>
                  <Col md={3} lg={3} xl={3}>
                    <Form.Label>Descripcion</Form.Label>
                  </Col> 
                  <Col md={9} lg={9} xl={9} >
                    <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Descripcion" />
                  </Col > 
                  </Row> 
                  </Form.Group> 

                  <Form.Group className="mb-5 " controlId="formBasicEmail">
                  <Row>
                  <Col md={3} lg={3} xl={3}>
                    <Form.Label>Plataforma</Form.Label>
                  </Col> 
                  <Col md={9} lg={9} xl={9} >
                    <Form.Control value={plataform} onChange={(e)=>setPlataform(e.target.value)} type="text" placeholder="Plataforma" />
                  </Col > 
                  </Row> 
                  </Form.Group>

                  <Form.Group className="mb-5 " controlId="formBasicEmail">
                  <Row>
                  <Col md={3} lg={3} xl={3}>
                    <Form.Label>Fecha inicio</Form.Label>
                  </Col> 
                  <Col md={9} lg={9} xl={9} >
                    <Form.Control value={dateinicio} onChange={(e)=>setDateinicio(e.target.value)} type="date" placeholder="FechaInicio" />
                  </Col > 
                  </Row> 
                  </Form.Group>

                  <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Row>
                  <Col md={3} lg={3} xl={3}>
                    <Form.Label>Costo</Form.Label>
                  </Col> 
                  <Col md={9} lg={9} xl={9} >
                    <Form.Control value={cost} onChange={(e)=>setCost(e.target.value)} type="number" placeholder="Cost" />
                  </Col > 
                  </Row> 
                  </Form.Group>

                </Form> 
              </Col>

              <Col md={6} lg={6} xl={6}>
                <Row style={{textAlign: 'center'}}>
                  <h3>Logo del torneo</h3>
                </Row>
                <Row >
                <Col md={3} lg={3} xl={3}> </Col>
                <Col md={6} lg={6} xl={6}>
                <Card className="mb-5 mt-5" >
                    <Card.Body className="container__img">
                      <img className="fill__img" src={image} alt="LOL_Logo"/>
                    </Card.Body>
                  </Card>
                  <input
                    type="file"
                    onChange={assignFile}
                  />
                </Col>
                <Col md={2} lg={2} xl={2}> </Col>
                </Row>
                <Row xs={5} md={1} lg={1} xl={1} className='mb-5 mt-4' >
                  <Col md={4} lg={4} xl={4}></Col> 
                  <Col md={4} lg={4} xl={4}> 
                      <div className="d-grid gap-2">
                        <Button variant="danger" size="md" onClick={uploadFile}>
                          Subir imagen
                        </Button>
                      </div>
                    </Col>
                  <Col md={4} lg={4} xl={4}></Col>    
              </Row> 

              </Col>

            </Row>
            <Row xs={5} md={1} lg={1} xl={1} className='mb-5 mt-4' >
             <Col md={4} lg={4} xl={4}></Col> 
             <Col md={4} lg={4} xl={4}> 
                <div className="d-grid gap-2">
                  <Button variant="danger" size="md" onClick={Crear_Torneo}>
                    Crear Torneo
                  </Button>
                </div>
              </Col>
             <Col md={4} lg={4} xl={4}></Col>    
            </Row>  
            </Card>
          </Row> 
        </Container>
      </div>

    );
}