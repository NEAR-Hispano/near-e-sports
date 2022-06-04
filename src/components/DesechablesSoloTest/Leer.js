import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'

/* const query = await getDocs(collection(db, "torneos"));
query.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
}) */

class Leer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      professor: "Franco Cuarterolo",

    }
    this.traerData = this.traerData.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  async traerData() {
    await getDocs(collection(db, "torneos")).then(torneos => {
      //console.log(torneos)
      torneos.forEach(doc => (
        console.log(doc.data())
      ))
    });
    //querySnapshot.forEach((doc) => {
    //  console.log(`${doc.id} => ${doc.data()}`);
    //});
  }

  render() {

    return (
      <div>
        <button onClick={this.traerData}>Traer BD</button>
      </div>
    );

  }
}
export default Leer;