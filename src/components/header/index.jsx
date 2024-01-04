import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isLightMode, setIsDarkMode] = useState(false);

  const lightmode = () => {
    const html = document.querySelector("html");
    const result = html.classList.toggle("light-mode");
    setIsDarkMode(!isLightMode);
    console.log(isLightMode)
    localStorage.setItem("@THEME", isLightMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("@THEME");
    console.log(savedMode);
  }, []);

  return (
    <header>
      <div className="container">
        <div className={styles.flexBox}>
          <button className="button">Contato</button>
          <nav>
            <ul className={styles.ulNav}>
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
          <button className="button--theme" onClick={lightmode}>
            {isLightMode ? <img src={moon} alt="Icone sun" /> : <img src={sun} alt="Icone sol" />}
          </button>
        </div>
      </div>
    </header>
  );
};
