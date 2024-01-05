import styles from "./style.module.scss";

export const JobExperienceCard = ({ job }) => {
  console.log(job)
  return (
    <li className={styles.projectCardList}>
      <div className={styles.projectCardRight}>
        <h3 className="title three">{job.company}</h3>
        <p className="paragraph">{job.time}</p>
        <p className="paragraph">{job.description}</p>
      </div>
      <div>

      </div>
    </li>
  );
};
