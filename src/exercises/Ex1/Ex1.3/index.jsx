export default function Ex1_3() {

    function alertar() {
        alert("Este alert foi feito através de tratamento de evento");
    }

    return (
        <div>
            <h1>Exercício 1.3</h1>
            <button onClick={alertar}>Tratamento de Eventos</button>
        </div>
    );
}