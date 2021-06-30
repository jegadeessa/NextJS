import Image from "next/image";

import styles from "../../../styles/skills.module.scss";

import githubLogo from "../../assets/images/github.svg";

export default function Skills({ skills }) {
  return (
    <div className={styles.skillsWrap}>
      <h3 className={styles.skillsWrap__title}>Top Skills</h3>
      <div className={styles.skillsWrap__details}>
        {skills.map((skill, index) => {
          return (
            <div className={styles.skillsWrap__details__card} key={index}>
              <Image
                src={githubLogo}
                width={48}
                height={48}
                alt="Skill"
                className={styles.skillsWrap__details__logo}
              ></Image>
              <span>{skill}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
