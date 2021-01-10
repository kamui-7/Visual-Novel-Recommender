import styles from "../styles/card.module.scss";

interface Props {
  title: string;
  desc: string;
  cover: string;
  link: string;
}

const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <img src={props.cover} alt="" className={styles.cover} />
      <div className={styles.info}>
        <a href={props.link}>
          <h3>{props.title}</h3>
        </a>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
