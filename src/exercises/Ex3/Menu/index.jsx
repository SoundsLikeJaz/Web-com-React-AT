import { Outlet } from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <h1>Exercícios da terceira bateria</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/exercise31">Exercício 1</a>
                    </li>
                    <li>
                        <a href="/exercise32">Exercício 2</a>
                    </li>
                    <li>
                        <a href="/exercise33">Exercício 3</a>
                    </li>
                    <li>
                        <a href="/exercise34">Exercício 4</a>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}