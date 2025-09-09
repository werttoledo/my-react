Claro, aquí tienes la documentación separada en dos actividades y en formato de texto:

Actividad 1: Componente Boton

El componente Boton permite crear botones personalizados que muestran el texto que tú elijas y ejecutan una función cuando el usuario hace clic. Puedes utilizar este componente para diferentes acciones, como aceptar o cancelar, y el texto del botón se envía a la función que definas en el componente padre. Además, el botón cuenta con estilos modernos gracias a Tailwind CSS, lo que mejora su apariencia y la experiencia de usuario.

Actividad 2: Componente Mensaje (vistaEffect.jsx)

El componente Mensaje muestra un campo de texto donde el usuario puede escribir su nombre. Cada vez que el nombre cambia, el componente utiliza el hook useEffect para mostrar el nuevo valor en la consola. En la pantalla, el usuario verá un saludo personalizado que se actualiza automáticamente según lo que escriba en el input. Este componente es útil para practicar el manejo de estados y efectos secundarios en React.

# Renderizado 

# Renderizado condicional
->Ternarios
->if - else
->condicion ? "si es verdadero" : "si es falso"

{
productos.length > 0
  ? <p>Hay productos disponibles</p>
  : <p>No hay productos</p>
}