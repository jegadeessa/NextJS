import Image from "next/image";

import styles from "../../../styles/skills.module.scss";

import githubLogo from "../../assets/images/github.svg";

export default function Projects() {
  return (
    <div className={styles.skillsWrap}>
      <h3 className={styles.skillsWrap__title}>Projects</h3>
      <div className={styles.skillsWrap__details}>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>ICICI Bank(UI Developer)</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>MaxBupa(UI Developer)</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>BDO UniBank Inc (Kony Developer)</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>Investec Online Banking Services (Angular Developer)</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>Olam Digital Services (Flutter Developer)</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>Anthem Inc (UI Developer)</span>
        </div>
      </div>
    </div>
  );
}
