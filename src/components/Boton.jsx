'use client'

export default function Boton({texto, onClick}) {
    const handleClick = () => {
        console.log('Texto del boton: ', texto);
        if (onClick) onClick(texto);
    };
    return (
        <div className="p-8">
            <button
                onClick={handleClick}
                className="
                    px-6 py-3
                    bg-blue-600 hover:bg-blue-700
                    active:bg-blue-800
                    text-white font-medium
                    rounded-lg
                    shadow-lg hover:shadow-xl
                    transform hover:scale-105 active:scale-95
                    transition-all duration-200
                    border-2 border-blue-700
                    focus:outline-none focus:ring-4 focus:ring-blue-300
                "
            >
                {texto}
            </button>
        </div>
    );
}