import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src="" alt="Logo" />
      </Link>
      <nav>
        <ul>
          <Link to={"/about"}>
            <li>
              <span>Sobre</span>
            </li>
          </Link>
          <li>
            <Link to={"/projects"}>
              <span>projetos</span>
            </Link>
          </li>
        </ul>
      </nav>
      <button>Contato</button>
    </header>
  );
};
