import { faker } from "@faker-js/faker";
import { useState } from "react";

export default function Ex2_3() {
    const nomes = new Array(100).fill().map(() => {
        return faker.person.fullName();
    });

    const [pessoas, setPessoas] = useState([...nomes]);

    const [temp, setTemp] = useState([...pessoas]);

    function handleFilter(event) {
        const value = event.target.value;
        setTemp(
            pessoas.filter((pessoa) => {
                return pessoa.toLowerCase().startsWith(value.toLowerCase());
            })
        );
    }

    return (
        <div>
            <h1>Exercício 2.3</h1>
            <div>
                <h2>Nomes</h2>
                <label htmlFor="filtro">Pesquisar: </label>
                <input type="text" id="filtro" onChange={handleFilter} />
                <ul>
                    {temp.map((pessoa, index) => (
                        <li key={index}>{pessoa}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}