'use client';
import {useState} from 'react';

export default function Page() {
     
    const [tareas, setTareas] = useState(["Estudiar React", "Hacer ejercicio", "leer un libro"]);

return (
 <div style={{ textAlign: 'center', marginTop: '30px' }}>
  <h1>Lista de Tareas</h1>
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    {tareas.map((tarea, index) => (
      <li
        key={index}
        style={{
          margin: '10px',
          padding: '10px',
          border: '1px solid gray',
          borderRadius: '8px'
        }}
      >
        {tarea}
      </li>
    ))}
  </ul>
</div>
);
}
