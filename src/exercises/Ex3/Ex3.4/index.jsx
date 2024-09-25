import { useForm } from "react-hook-form";

export default function Ex3_4() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function submeterDados(dados) {
        alert(JSON.stringify(dados));
        reset();
    }
    return (
        <div>
            <h1>Exercício 3.4</h1>
            <div>
                <h2>Formulário</h2>
                <form onSubmit={handleSubmit(submeterDados)}>
                    <label htmlFor="nome">Nome:</label>&nbsp;
                    <input type="text" id="nome" name="nome" {...register("nome", {
                        required: "O campo nome é obrigatório!"
                    })} />
                    {errors.nome?.message && (
                        <div>
                            <span style={{ color: "red" }}>{errors.nome.message}</span>
                        </div>
                    )}
                    <br />
                    <label htmlFor="email">Email:</label>&nbsp;
                    <input type="email" id="email" name="email" {...register("email", {
                        required: "O campo email é obrigatório!"
                    })} />
                    {errors.email?.message && (
                        <div>
                            <span style={{ color: "red" }}>{errors.email.message}</span>
                        </div>
                    )}
                    <br />
                    <label htmlFor="fone">Telefone:</label>&nbsp;
                    <input type="tel" id="fone" name="fone" {...register("tel", {
                        required: "O campo telefone é obrigatório!",
                        validate: {
                            matchPattern: (v) => /^[0-9]+$/g.test(v) || "O campo telefone deve conter apenas números!",
                        }
                    })} />
                    {errors.tel?.message && (
                        <div>
                            <span style={{ color: "red" }}>{errors.tel.message}</span>
                        </div>
                    )}
                    <br /> <br />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}