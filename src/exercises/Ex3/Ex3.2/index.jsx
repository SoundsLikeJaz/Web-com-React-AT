import { useState } from "react";

export default function Ex3_1() {

    const [nome, setNome] = useState("");
    const [fone, setFone] = useState("");
    const [email, setEmail] = useState("");
    const [errorNome, setErrorNome] = useState("");
    const [errorFone, setErrorFone] = useState("");
    const [errorEmail, setErrorEmail] = useState("");

    function handleNomeChange(event) {
        let value = event.target.value;
        if (!value) {
            setErrorNome("O campo nome é obrigatório!");
        } else {
            setErrorNome("");
        }
        setNome(value);
    }

    function handleEmailChange(event) {
        let value = event.target.value;
        if (!value) {
            setErrorEmail("O campo email é obrigatório!");
        } else {
            setErrorEmail("");
        }
        setEmail(value);
    }

    function handleFoneChange(event) {
        let value = event.target.value;
        if (!value) {
            setErrorFone("O campo telefone é obrigatório!");
        } else {
            setErrorFone("");
        }
        setFone(value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!nome) {
            setErrorNome("O campo nome é obrigatório!");
        }
        if (!email) {
            setErrorEmail("O campo email é obrigatório!");
        }
        if (!fone) {
            setErrorFone("O campo telefone é obrigatório!");
        }
        if (!nome || !email || !fone) {
            return;
        }

        alert(`Nome: ${nome} - Email: ${email} - Telefone: ${fone}`);
    }

    return (
        <div>
            <h1>Exercício 3.2</h1>
            <div>
                <h2>Formulário</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome:</label>&nbsp;
                    <input type="text" id="nome" name="nome" value={nome} onChange={handleNomeChange} />
                    {errorNome && <div><span style={{ color: "red" }}>{errorNome}</span></div>}
                    <br />
                    <label htmlFor="email">Email:</label>&nbsp;
                    <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
                    {errorEmail && <div><span style={{ color: "red" }}>{errorEmail}</span></div>}
                    <br />
                    <label htmlFor="fone">Telefone:</label>&nbsp;
                    <input type="tel" id="fone" name="fone" value={fone} onChange={handleFoneChange} />
                    {errorFone && <div><span style={{ color: "red" }}>{errorFone}</span></div>}
                    <br /> <br />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}