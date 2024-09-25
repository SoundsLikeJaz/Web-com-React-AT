import { useEffect, useState } from "react";
import { listarCategorias } from "../../../infra/refeicoes";

export default function Ex2_4() {

    const [categorias, setCategorias] = useState([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    const [t, setT] = useState("");

    useEffect(() => {
        listarCategorias().then((categorias) => {
            setCategorias(categorias);
        });
    });

    function handleChange(event) {
        const categoria = categorias.find(c => c.idCategory === event.target.value);
        setT(event.target.value);
        setCategoriaSelecionada(categoria);
    }

    return (
        <div>
            <h1>Exercício 2.4</h1>
            <h2>Refeições</h2>
            <select value={t} onChange={handleChange}>
                <option value="" disabled>Selecione uma categoria de refeição</option>
                {categorias.map((c, index) => (
                    <option key={index} value={c.idCategory}>{c.strCategory}</option>
                ))}
            </select>
            {categoriaSelecionada && (
                <div>
                    <h3>{categoriaSelecionada.strCategory}</h3>
                    <p>{categoriaSelecionada.strCategoryDescription}</p>
                    <img src={categoriaSelecionada.strCategoryThumb} alt={categoriaSelecionada.strCategory} />
                </div>
            )}
        </div>
    );
}