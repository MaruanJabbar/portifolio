import { projects } from "../../data/projects";
import { ProjectSectionCards } from "./projectCard";
import styles from "./style.module.scss";

export const ProjectSection = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.flexBox}>
          <h1 className="title two">Projetos</h1>
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
