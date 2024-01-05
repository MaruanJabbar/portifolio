import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import banner from "../../assets/banner-image.svg";

export const BannerSection = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.flexBox}>
          <div className={styles.leftFlexBox}>
            <h1 className="title two">Bem vindo ao meu portfólio</h1>
            <p className="paragraph">Aqui está diposto informações de trabalho e meus projetos</p>
            <Link className={`button ${styles.buttonBanner}`} to={"/projects"}>
              <span className="label">Saiba mais</span>
            </Link>
          </div>
          <div className={styles.rightFlexBox}>
            <img src={banner} alt="Imagem do Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};
