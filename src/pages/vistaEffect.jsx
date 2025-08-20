
/*
  useEffect(() => {
    -- accion que quiero ejecutar 
    },[dependencia])  -- array de dependencias

*/


// Gerenar un vista al ejecutar un efecto secundario me muestre el contenido en consola 

'use client';
import {useState, useEffect} from 'react';

export default function Mensaje() {
    const [nombre, setNombre] = useState("");
    // useEffect 
    useEffect(() =>{
        console.log("el nombre es: ", nombre)
    }, [nombre]);
    return (
        <div style={{textAlign: 'center'}}>
        <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        />
        <p>Hola {nombre || "ivitado"} 😏</p>
        </div>
    )
}