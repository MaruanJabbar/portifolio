import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
import { useEffect, useState } from "react";

export const Header = () => {
  const savedMode = JSON.parse(localStorage.getItem('@THEME'));
  const [isLightMode, setIsLightMode] = useState(savedMode ? savedMode : false);

  const lightmode = () => {
    setIsLightMode(prevMode => {
      const newMode = !prevMode;
      const html = document.querySelector('html');
      html.classList.toggle('light-mode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    const html = document.querySelector('html');
    if (isLightMode) {
      html.classList.add('light-mode');
      localStorage.setItem('@THEME', JSON.stringify(isLightMode));
    } else {
      html.classList.remove('light-mode');
      localStorage.setItem('@THEME', JSON.stringify(isLightMode));
    }
  }, [isLightMode]);

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
          <button className="button-theme" onClick={lightmode}>
            {isLightMode ? <img src={moon} alt="Icone sun" /> : <img src={sun} alt="Icone sol" />}
          </button>
        </div>
      </div>
    </header>
  );
};
