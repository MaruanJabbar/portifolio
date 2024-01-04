import styles from "./style.module.scss"


export const StackCards = ({ tech }) => {
    return <li className={styles.stackCard}>
        <img src={tech.img} alt={tech.name} />
        <h3 className="title three card">{tech.name}</h3>
  </li>;
};
