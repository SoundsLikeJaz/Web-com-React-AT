import { useState } from "react";

export default function Ex2_1({ adm = false }) {
    const [isAdmin, setIsAdmin] = useState(adm);

    return (
        <div>
            <h1>Exercício 2.1</h1>
            <p>O usuário atual é {isAdmin ? "Admnistrador" : "Colaborador"}</p>
            <label htmlFor="adm">Admnistrador</label>
            <input
                type="checkbox"
                id="adm"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
            />
        </div>
    );
}