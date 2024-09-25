import { useForm } from "react-hook-form";

export default function Ex3_3() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function submeterDados(dados) {
        alert(JSON.stringify(dados));
        reset();
    }
    return (
        <div>
            <h1>Exercício 3.3</h1>
            <div>
                <h2>Formulário</h2>
                <form onSubmit={handleSubmit(submeterDados)}>
                    <label htmlFor="nome">Nome:</label>&nbsp;
                    <input type="text" id="nome" name="nome" {...register("nome")} />
                    <br />
                    <label htmlFor="email">Email:</label>&nbsp;
                    <input type="email" id="email" name="email" {...register("email")} />
                    <br />
                    <label htmlFor="fone">Telefone:</label>&nbsp;
                    <input type="tel" id="fone" name="fone" {...register("tel")} />
                    <br /> <br />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}