'use cliente'

export default function Boton({texto, onClick}) {
    const handleClick = () => {
    console.log('Texo del boton: ', texto);
    // que debe ejecutar la funcion onclick de su padre
    if (onClick) onClick(texto);

    };
    return (
        <div className="p-8">
            <button onClick={handleClick}
                classNmae="
                    px-6 py-3
                    bg-blues-600 hover:bg-blue-700
                    activate:bg-blue-800
                    text-white font-medium
                    rounded-lg
                    shadow-lg hover:shadow-xl
                    transform hover:scale-105  activate:scale-85
                    transition-all duration-200
                    border-2 border-blue-700
                    focus:outline-nome focus:ring-4 focus:-blue-300
                "
            >
              {texto}
        </button>
        </div>
    );
}