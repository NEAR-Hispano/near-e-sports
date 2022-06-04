import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'

/* const query = await getDocs(collection(db, "torneos"));
query.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
}) */

class Escribir extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      professor: "Franco Cuarterolo",

    }
    this.insertarData = this.insertarData.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  async insertarData() {
    try {
        const docRef = await addDoc(collection(db, "torneos"), {
          nombre: "Torneo 2",
          descripcion: "Torneo plus",
          participantes: 12,
          capital: 320
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  render() {

    return (
      <div>
        <button onClick={this.insertarData}>Insertar en BD</button>
      </div>
    );

  }
}
export default Escribir;