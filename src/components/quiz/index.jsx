import { useState } from "react";

export default function Quiz({ pergunta, resposta }) {
    const [mostrar, setMostrar] = useState(false);
  
    return (
      <div>
        <h2>{pergunta}</h2>
        <button onClick={() => setMostrar(!mostrar)}>{mostrar ? "Esconder resposta" : "Mostrar resposta"}</button>
        {mostrar && <p>{resposta}</p>}
      </div>
    );
}