import styles from "./style.module.scss";
import linkedin from "../../assets/linkedin-icon.svg";
import whatsApp from "../../assets/whatsapp-icon.svg";
import github from "../../assets/github-blue-icon.svg";



export const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className={styles.flexBox}>
          <div>
            <h1 className="title two">Contato</h1>
            <ul className={styles.contactUl}>
              <li><a href="https://www.linkedin.com/in/maruan-jabbar-drehmer-894512133/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Ícone LinkedIn" /></a></li>
              <li><a href="https://wa.me/5541996573186" target="_blank" rel="noopener noreferrer"><img  src={whatsApp} alt="Ícone WhatsApp" /></a></li>
              <li><a href="https://github.com/MaruanJabbar" target="_blank" rel="noopener noreferrer"><img src={github} alt="Ícone GitHub" /></a></li>
            </ul>
          </div>
          <span className="paragraph name"></span>
                </div>
        </div>
    </footer>
  );
};
