'use client';
import {useState} from 'react';
import Boton from '../components/Boton';

export default function Home() {
  const [mensaje, setMensaje] = useState('');

  // funcion para manejar el comportamiento del Boton 
    const manejarClick = (textoBoton:string) => {    
    setMensaje(`Has hecho click en el boton ${textoBoton}`);

    // condicional para mostra un mensaje de alerta 
    if (textoBoton === 'Aceptar'){
      console.log('Boton Aceptar presionado');
      alert('¡Gracias por Acepter!');
    }else if (textoBoton === 'Cancelar'){
      console.log('Boton Cancelar presionado');
      alert('¡Gracias por Cancelada!');
    }
  };

  return (
    <main style={{ textAlign: 'center' }}>   
      <h1>Pagina Principal</h1>
      {mensaje && <p style={{color: 'green', fontSize: '18px'}}>{mensaje}</p>}
      <div>
      <Boton texto="Aceptar" onClick={manejarClick}/>
      <Boton texto="Cancelar"  onClick={manejarClick}/>
      </div>
    </main>
  );
}
