import { useEffect, useState } from "react";
import obterPaises from "../../../infra/paises";

export default function Ex2_2({ pais = "" }) {
    const [paises, setPaises] = useState([]);
    const [paisSelecionado, setPaisSelecionado] = useState(pais);

    useEffect(() => {
        obterPaises().then((paises) => {
            setPaises(paises);
        });
    }, []);

    return (
        <div>
            <h1>Exercício 2.2</h1>
            <h2>Países</h2>
            <select value={paisSelecionado} onChange={(event) => setPaisSelecionado(event.target.value)}>
                <option value="" disabled>Selecione um país</option>
                {paises.map((p, index) => (
                    <option key={index} value={p.nome}>{p.nome}</option>
                ))}
            </select>
        </div>
    )
}