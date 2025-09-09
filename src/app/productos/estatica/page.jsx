'use client';

const productosEstaticos = [
  { id: 1, nombre: 'Manzana', precio: 2000, descripcion: 'Fruta fresca y crujiente', imagen: '/file.svg' },
  { id: 2, nombre: 'Banano', precio: 1500, descripcion: 'Energía natural para tu día', imagen: '/globe.svg' },
  { id: 3, nombre: 'Naranja', precio: 1800, descripcion: 'Rica en vitamina C', imagen: '/window.svg' },
];

export default function ProductosEstaticos() {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>Listado de productos (Estático)</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        padding: '20px'
      }}>
        {productosEstaticos.map((p) => (
          <div key={p.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '12px', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={p.imagen} alt={p.nombre} width="120" height="120" />
            </div>
            <h3 style={{ marginTop: '8px' }}>{p.nombre}</h3>
            <p style={{ fontWeight: 'bold' }}>${p.precio}</p>
            <p style={{ color: '#555' }}>{p.descripcion}</p>
            <button style={{ marginTop: '8px' }}>Agregar</button>
          </div>
        ))}
      </div>
    </div>
  );
}


