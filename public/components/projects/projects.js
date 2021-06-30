import Image from "next/image";

import styles from "../../../styles/projects.module.scss";

import githubLogo from "../../assets/images/github.svg";

export default function Projects({ projects }) {
  return (
    <div
      className={styles.projectsWrap}
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <h3 className={styles.projectsWrap__title}>Projects</h3>
      <div className={styles.projectsWrap__details}>
        {projects.map((project, index) => {
          return (
            <div className={styles.projectsWrap__details__card} key={index}>
              <Image
                src={githubLogo}
                width={48}
                height={48}
                alt="Skill"
                className={styles.projectsWrap__details__logo}
              ></Image>
              <span>{project.projectName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
