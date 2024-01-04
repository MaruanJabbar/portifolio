import { technologies } from "../../data/technologies";
import { StackCards } from "./stackCards";
import styles from "./style.module.scss"


export const StackSection = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.stackFlexBox}>
          <h1 className="title two">Tecnologias</h1>
          <div>
            <ul className={styles.stackList}>
              {technologies.map((tech) => (
                <StackCards key={tech.name} tech={tech} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
