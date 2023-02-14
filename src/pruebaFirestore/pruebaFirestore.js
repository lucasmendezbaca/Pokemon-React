import { collection, getDocs, addDoc } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { useEffect, useState } from "react";

function PruebaFirestore() {
    const [todos, setTodos] = useState([]);
 
    const leerDatosFirestore = async () => {
        await getDocs(collection(db, "pokemons"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
                setTodos(newData);                
                console.log(todos, newData);
            })
    }

    const escribeDatosFirestore = async () => {
        try {
            const docRef = await addDoc(collection(db, "pokemons"), {
                numero: 2,
                nombre: "Ivysaur"
            });
            console.log("Document written with ID: ", docRef.id);
            leerDatosFirestore();
          } catch {
            console.error("Error adding document: ");
          }
    }
   
    useEffect(()=>{
        leerDatosFirestore();
    }, [])


    return (
        <div>
            <h1>Prueba Firestore</h1>
            <ul>
                {todos.map((todo) => (<li key={todo.id}>{todo.nombre}</li>))}
            </ul>
            <button onClick={escribeDatosFirestore}>Agregar</button>
        </div>
    );
}

export default PruebaFirestore;