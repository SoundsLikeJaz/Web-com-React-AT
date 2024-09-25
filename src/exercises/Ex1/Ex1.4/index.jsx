import { Quiz } from "../../../components";

export default function Ex1_4() {

    const resposta = "A desvantagem de implementar um inline event é ele não permitir a reutilização de funções, além de dificultar a manutenção do código"

    return (
        <div>
            <h1>Exercício 1.4</h1>
            <Quiz pergunta="Quais são as desvantagens de implementar um inline event?" resposta={resposta} />
        </div>
    );
}