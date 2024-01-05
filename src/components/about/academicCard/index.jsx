import styles from "./style.module.scss";

export const AcademicExperienceCard = ({ academic }) => {
  console.log(academic)
  return (
    <li className={styles.projectCardList}>
      <div className={styles.projectCardRight}>
        <h3 className="title three">{academic.institution}</h3>
        <p className="paragraph">{academic.time}</p>
        <p className="paragraph">{academic.description}</p>
      </div>
      <div>

      </div>
    </li>
  );
};
