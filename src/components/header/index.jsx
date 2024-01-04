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
              <span className="label nav">Sobre</span>
            </li>
          </Link>
          <li>
            <Link to={"/projects"}>
              <span className="label nav">projetos</span>
            </Link>
          </li>
        </ul>
      </nav>
      <button className="button">Contato</button>
    </header>
  );
};
