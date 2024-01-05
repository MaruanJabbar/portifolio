import styles from "./style.module.scss";
import { JobExperienceCard } from "./experienceCard";
import { jobExperience, academicExperience } from "../../data/experiences";
import { AcademicExperienceCard } from "./academicCard";
export const About = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.flexBox}>
          <div>
            <img src="" alt="Minha imagem" />
            <h2 className="title three">Maruan Jabbar Drehmer</h2>
          <p className="paragraph">
            Graduado em Física pela UFPR e com mestrado pela USP, adquiri sólidos conhecimentos em tecnologia,
            particularmente na área de programação, aplicados em meu TCC e dissertação. Após concluir o mestrado, migrei
            do ambiente acadêmico para o desenvolvimento web. Possuo experiência em HTML, CSS, SCSS, JavaScript, React,
            Python, Git e Node.js. Minha transição para o mundo do desenvolvimento web foi impulsionada pela vontade de
            explorar front-end e back-end. Estou constantemente aprimorando minhas habilidades e buscando conhecimento
            em novas tecnologias. Pretendo expandir para o desenvolvimento mobile no futuro.
          </p>
          </div>
          <div className={styles.experienceFlexBox}>
            <h1 className="title three">Experiências profissionais</h1>
            <ul className={styles.experienceList}>
              {jobExperience.map((job) => (
                <JobExperienceCard key={job.id} job={job} />
              ))}
            </ul>
            <h1 className="title three">Experiências profissionais</h1>
            <ul className={styles.experienceList}>
              {academicExperience.map((academic) => (
                <AcademicExperienceCard key={academic.id} academic={academic} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
