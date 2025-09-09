'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AgregarProducto() {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
    imagen: '/next.svg'
  });
  const [imagenPreview, setImagenPreview] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        setImagenPreview(base64);
        setFormData({
          ...formData,
          imagen: base64
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje('');

    try {
      const res = await fetch('/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          precio: Number(formData.precio)
        }),
      });

      if (res.ok) {
        setMensaje('✅ Producto agregado exitosamente');
        setFormData({ nombre: '', precio: '', descripcion: '', imagen: '/next.svg' });
        setImagenPreview(null);
        setTimeout(() => {
          router.push('/productos/local');
        }, 1500);
      } else {
        setMensaje('❌ Error al agregar producto');
      }
    } catch (error) {
      setMensaje('❌ Error de conexión');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center' }}>Agregar Producto</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Precio:</label>
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            required
            min="0"
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Descripción:</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            rows="3"
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
          />
          {imagenPreview && (
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <p style={{ marginBottom: '8px', fontSize: '14px' }}>Vista previa:</p>
              <img 
                src={imagenPreview} 
                alt="Vista previa" 
                style={{ 
                  maxWidth: '150px', 
                  maxHeight: '150px', 
                  border: '1px solid #ccc', 
                  borderRadius: '8px' 
                }} 
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={enviando}
          style={{
            padding: '12px',
            backgroundColor: enviando ? '#ccc' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: enviando ? 'not-allowed' : 'pointer'
          }}
        >
          {enviando ? 'Agregando...' : 'Agregar Producto'}
        </button>
      </form>

      {mensaje && (
        <p style={{ 
          textAlign: 'center', 
          marginTop: '16px',
          color: mensaje.includes('✅') ? 'green' : 'red'
        }}>
          {mensaje}
        </p>
      )}

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={() => router.push('/productos/local')}
          style={{
            padding: '8px 16px',
            backgroundColor: '#666',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Ver Productos Locales
        </button>
      </div>
    </div>
  );
}
