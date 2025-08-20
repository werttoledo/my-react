'use client';
import react, {useState }from 'react';

// const [valor, sertValor] = useState(valorInicial);
export default function VistaNueva() {
    const [valor, sertValor] = useState(0);

    return (
        <div style={{textAling:'center'}}>
            <h2>{valor}</h2>
            <button onClick={() => sertValor(valor + 1)}>Aumentar</button>
            <button onClick={() => sertValor(valor - 1)}>Disminuir</button>
        </div>     
    );
}