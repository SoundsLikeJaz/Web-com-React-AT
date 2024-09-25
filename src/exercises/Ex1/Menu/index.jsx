import { Outlet } from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <h1>Exercícios da primeira bateria</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/exercise11">Exercício 1</a>
                    </li>
                    <li>
                        <a href="/exercise12">Exercício 2</a>
                    </li>
                    <li>
                        <a href="/exercise13">Exercício 3</a>
                    </li>
                    <li>
                        <a href="/exercise14">Exercício 4</a>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}