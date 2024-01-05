import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
import { useEffect, useState } from "react";

export const Header = () => {
  const savedMode = JSON.parse(localStorage.getItem('@THEME'));
  const [isLightMode, setIsLightMode] = useState(savedMode ? savedMode : false);

  const lightMode = () => {
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
          <div></div>
          <nav>
            <ul className={styles.ulNav}>
            <Link to={"/"}>
                <li>
                  <span className="label nav">Home</span>
                </li>
              </Link>
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
          <button className="button-theme" onClick={lightMode}>
            {isLightMode ? <img src={moon} alt="Ícone sun" /> : <img src={sun} alt="Ícone sol" />}
          </button>
        </div>
      </div>
    </header>
  );
};
