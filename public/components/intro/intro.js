import styles from "../../../styles/intro.module.scss";

export default function Intro({ name, location, interests }) {
  return (
    <div className={styles.introWrap}>
      <h6>Hey!</h6>
      <p>
        I am {name} from {location}
      </p>
      <p>
        I love
        {interests.map((interest, index) => {
          return index == interests.length - 1
            ? ` ${interest}.`
            : ` ${interest},`;
        })}
      </p>
    </div>
  );
}
