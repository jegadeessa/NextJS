import Image from "next/image";

import styles from "../../../styles/skills.module.scss";

import githubLogo from "../../assets/images/github.svg";

export default function Projects({ projects }) {
  return (
    <div className={styles.skillsWrap}>
      <h3 className={styles.skillsWrap__title}>Projects</h3>
      <div className={styles.skillsWrap__details}>
        {projects.map((project, index) => {
          return (
            <div className={styles.skillsWrap__details__card} key={index}>
              <Image
                src={githubLogo}
                width={48}
                height={48}
                alt="Skill"
                className={styles.skillsWrap__details__logo}
              ></Image>
              <span>{project}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
