import { projects } from "../../data/projects";
import { ProjectSectionCards } from "./projectCardList";
import styles from "./style.module.scss";

export const ProjectPageList = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.flexBox}>
          <h1 className="title two">Projetos</h1>
          <p className="paragraph">Os repositórios podem ser acessados clicando no Ícone do GitHub</p>
          <div>
            <ul className={styles.projectList}>
              {projects.map((project) => (
                <ProjectSectionCards key={project.name} project={project} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
