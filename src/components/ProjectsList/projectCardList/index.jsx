import styles from "./style.module.scss";
import GitIcon from "../../../assets/git-icon.svg";

export const ProjectSectionCards = ({ project }) => {
  return (
    <li className={styles.projectCardList}>
      <div className={styles.projectCardRight}>
        <h3 className="title three card">{project.name}</h3>
        <p className="paragraph card">{project.description}</p>
        <a className="link" href={project.link} target="_blank">Saiba mais</a>
      </div>
      <div>
        <img className={styles.gitHubIcon} src={GitIcon} alt="Icone do Git Hub" />
      </div>
    </li>
  );
};
