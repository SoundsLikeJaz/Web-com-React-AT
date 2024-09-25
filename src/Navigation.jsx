import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navPrincipal">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {Array.from({ length: 4 }, (_, index) => (
          <li key={index}>
            <Link to={`/exercise${index + 1}`}>Bateria de Exercícios {index + 1}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;