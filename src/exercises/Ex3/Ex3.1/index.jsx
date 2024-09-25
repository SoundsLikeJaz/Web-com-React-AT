import { useState } from "react";

export default function Ex3_1({ Nome = "", Email = "", Fone = "" }) {

    const [nome, setNome] = useState(Nome);
    const [email, setEmail] = useState(Email);
    const [fone, setFone] = useState(Fone);

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Nome: ${nome} - Email: ${email} - Telefone: ${fone}`);
    }

    return (
        <div>
            <h1>Exercício 3.1</h1>
            <div>
                <h2>Formulário</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome:</label>&nbsp;
                    <input type="text" id="nome" name="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                    <br />
                    <label htmlFor="email">Email:</label>&nbsp;
                    <input type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} />
                    <br />
                    <label htmlFor="fone">Telefone:</label>&nbsp;
                    <input type="tel" id="fone" name="fone" value={fone} onChange={event => setFone(event.target.value)} />
                    <br /> <br />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}