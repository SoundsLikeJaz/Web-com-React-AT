import { Outlet } from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <h1>Exercícios da segunda bateria</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/exercise21">Exercício 1</a>
                    </li>
                    <li>
                        <a href="/exercise22">Exercício 2</a>
                    </li>
                    <li>
                        <a href="/exercise23">Exercício 3</a>
                    </li>
                    <li>
                        <a href="/exercise24">Exercício 4</a>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}