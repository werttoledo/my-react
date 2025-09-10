
'use client';
import {useState} from 'react';

export default function Page() {
     
    const [tareas, setTareas] = useState(["Estudiar React", "Hacer ejercicio", "leer un libro"]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    const agregarTarea = () => {
        const valor = nuevaTarea.trim();
        if (!valor) return;
        setTareas(prev => [...prev, valor]);
        setNuevaTarea("");
    };

    const eliminarTarea = (indiceAEliminar) => {
        setTareas(prev => prev.filter((_, i) => i !== indiceAEliminar));
    };

return (
 <div style={{ textAlign: 'center', marginTop: '30px' }}>
  <h1>Lista de Tareas</h1>
  <div style={{ marginTop: '10px' }}>
    <input
      type="text"
      value={nuevaTarea}
      onChange={(e) => setNuevaTarea(e.target.value)}
      placeholder="Nueva tarea"
      style={{ padding: '8px', width: '60%', maxWidth: '320px' }}
    />
    <button
      onClick={agregarTarea}
      style={{
        marginLeft: '8px',
        padding: '10px 14px',
        cursor: 'pointer',
        background: '#2563eb',
        color: '#ffffff',
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0 6px 14px rgba(37, 99, 235, 0.25)',
        transition: 'transform 0.1s ease, opacity 0.2s ease, box-shadow 0.2s ease'
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 18px rgba(37, 99, 235, 0.35)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 6px 14px rgba(37, 99, 235, 0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(1px)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      Agregar
    </button>
  </div>
  
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
        <span>{tarea}</span>
        <button
          onClick={() => eliminarTarea(index)}
          style={{
            marginLeft: '12px',
            padding: '8px 12px',
            cursor: 'pointer',
            background: '#fee2e2',
            color: '#b91c1c',
            border: '1px solid #fecaca',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(185, 28, 28, 0.15)',
            transition: 'transform 0.1s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 14px rgba(185, 28, 28, 0.25)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 10px rgba(185, 28, 28, 0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(1px)'; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Eliminar
        </button>
      </li>
    ))}
  </ul>
</div>
);
}
