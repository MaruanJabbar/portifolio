import styles from "./style.module.scss";

export const AboutSection = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.flexBox}>
          <div className={styles.flexBoxLeft}>
            <h1 className="title two">Sobre mim</h1>
          </div>
          <div className={styles.flexBoxRight}>
            <p className="paragraph">
              Sobre Graduado em Física pela UFPR e com mestrado pela USP, adquiri sólidos conhecimentos em tecnologia,
              particularmente na área de programação, aplicados em meu TCC e dissertação. Após concluir o mestrado,
              migrei do ambiente acadêmico para o desenvolvimento web. Possuo experiência em HTML, CSS, SCSS,
              JavaScript, React, Python, Git e Node.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
