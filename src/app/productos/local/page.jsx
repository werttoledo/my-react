'use client';
import { useEffect, useState } from 'react';

export default function ProductosLocales() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
    imagen: '/next.svg'
  });
  const [imagenPreview, setImagenPreview] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      try {
        const res = await fetch('/api/productos');
        if (!res.ok) throw new Error('Respuesta no válida');
        const data = await res.json();
        setProductos(data);
      } catch (e) {
        setError('Error al cargar productos ❌');
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        setImagenPreview(base64);
        setNuevoProducto({
          ...nuevoProducto,
          imagen: base64
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const agregarProductoLocal = () => {
    if (!nuevoProducto.nombre || !nuevoProducto.precio || !nuevoProducto.descripcion) {
      alert('Por favor completa todos los campos');
      return;
    }

    const producto = {
      id: productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1,
      nombre: nuevoProducto.nombre,
      precio: Number(nuevoProducto.precio),
      descripcion: nuevoProducto.descripcion,
      imagen: nuevoProducto.imagen
    };

    setProductos(prev => [...prev, producto]);
    setNuevoProducto({ nombre: '', precio: '', descripcion: '', imagen: '/next.svg' });
    setImagenPreview(null);
    setMostrarFormulario(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>Productos locales (API interna)</h1>

      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          {mostrarFormulario ? 'Ocultar Formulario' : 'Agregar Producto Local'}
        </button>
      </div>

      {mostrarFormulario && (
        <div style={{ 
          maxWidth: '400px', 
          margin: '0 auto 30px', 
          padding: '20px', 
          border: '1px solid #ccc', 
          borderRadius: '8px',
          backgroundColor: '#f9f9f9'
        }}>
          <h3>Agregar Producto Local</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                value={nuevoProducto.nombre}
                onChange={(e) => setNuevoProducto({...nuevoProducto, nombre: e.target.value})}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <div>
              <label>Precio:</label>
              <input
                type="number"
                value={nuevoProducto.precio}
                onChange={(e) => setNuevoProducto({...nuevoProducto, precio: e.target.value})}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <div>
              <label>Descripción:</label>
              <textarea
                value={nuevoProducto.descripcion}
                onChange={(e) => setNuevoProducto({...nuevoProducto, descripcion: e.target.value})}
                rows="2"
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>
            <div>
              <label>Imagen:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {imagenPreview && (
                <div style={{ marginTop: '8px', textAlign: 'center' }}>
                  <p style={{ marginBottom: '4px', fontSize: '12px' }}>Vista previa:</p>
                  <img 
                    src={imagenPreview} 
                    alt="Vista previa" 
                    style={{ 
                      maxWidth: '100px', 
                      maxHeight: '100px', 
                      border: '1px solid #ccc', 
                      borderRadius: '4px' 
                    }} 
                  />
                </div>
              )}
            </div>
            <button
              onClick={agregarProductoLocal}
              style={{
                padding: '10px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Agregar Localmente
            </button>
          </div>
        </div>
      )}

      {cargando && <p>Cargando productos...</p>}
      {error && !cargando && <p style={{ color: 'red' }}>{error}</p>}

      {!cargando && !error && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          padding: '20px'
        }}>
          {productos.map((p) => (
            <div key={p.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={p.imagen} alt={p.nombre} width="120" height="120" />
              </div>
              <h3 style={{ marginTop: '8px' }}>{p.nombre}</h3>
              <p style={{ fontWeight: 'bold' }}>${p.precio}</p>
              <p style={{ color: '#555' }}>{p.descripcion}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


