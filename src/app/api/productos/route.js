let productos = [
  { id: 1, nombre: 'Manzana', precio: 2000, descripcion: 'Fruta fresca y crujiente', imagen: '/file.svg' },
  { id: 2, nombre: 'Banano', precio: 1500, descripcion: 'Energía natural para tu día', imagen: '/globe.svg' },
  { id: 3, nombre: 'Naranja', precio: 1800, descripcion: 'Rica en vitamina C', imagen: '/window.svg' },
];

export async function GET() {
  return new Response(JSON.stringify(productos), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, precio, descripcion, imagen } = body || {};
    if (!nombre || !precio || !descripcion) {
      return new Response(JSON.stringify({ message: 'Faltan campos requeridos' }), { status: 400 });
    }
    const nuevo = {
      id: productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1,
      nombre,
      precio,
      descripcion,
      imagen: imagen || '/next.svg'
    };
    productos.push(nuevo);
    return new Response(JSON.stringify(nuevo), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ message: 'Error procesando la solicitud' }), { status: 500 });
  }
}


