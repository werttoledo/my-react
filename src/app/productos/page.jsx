'use client';

import { useState, useEffect } from 'react';

// useEffect -> para consumir una API
// Renderizado condicional --> cargando...
// mapp() --> renderizar la info
// Diseño grid o flexbox

export default function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // useEffect para consumir la API
    useEffect(() => {
        const cargar = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
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

    return(
        <div style={{textAlign: 'center', marginTop: '30px'}}>
            <h1>Listado de productos (API)</h1>

            {cargando && <p>Cargando productos...</p>}
            {error && !cargando && <p style={{ color: 'red' }}>{error}</p>}

            {!cargando && !error && (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '20px',
                    padding: '20px'
                }}>
                    {productos.map(producto => (
                        <div key={producto.id}
                             style={{
                                 border: '1px solid #ccc',
                                 borderRadius: '8px',
                                 padding: '12px',
                                 textAlign: 'left'
                             }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={producto.image} alt={producto.title} width="120" height="120" />
                            </div>
                            <h3 style={{ marginTop: '8px' }}>{producto.title}</h3>
                            <p style={{ fontWeight: 'bold' }}>${producto.price}</p>
                            <p style={{ color: '#555' }}>{producto.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}