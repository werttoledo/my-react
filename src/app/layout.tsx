import Navbar from '@/components/Navbar'
import './globals.css'
import {ReactNode} from "react";

//todo crear ell archivo con estilos predeterminados para el proyceto 

export const metadata = {
  tittle: 'Clase Listas y Renderizados',
  description: 'Aprendiendo React con Next.js',
};

interface RootLayoutProps {
  children: ReactNode;
}



export default function RootLayout({children}){
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}


/*
function suma(a, b) {
  return a + b;
}

Función tipada
function sumaTipada(a: number, b: number): number {
  return a + b;
}


Componete padre -> Componente hijo

const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(n => n * 2);

*/

