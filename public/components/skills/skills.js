import Image from "next/image";

import styles from "../../../styles/skills.module.scss";

import githubLogo from "../../assets/images/github.svg";

export default function Skills() {
  return (
    <div className={styles.skillsWrap}>
      <h3 className={styles.skillsWrap__title}>Top Skills</h3>
      <div className={styles.skillsWrap__details}>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>Angular</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>Flutter</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>HTML5</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>CSS3</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>Javascript</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>Sass</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>Scss</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>Github</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>Jquery</span>
        </div>
        <div className={styles.skillsWrap__details__card}>
          <Image
            src={githubLogo}
            width={48}
            height={48}
            alt="Skill"
            className={styles.skillsWrap__details__logo}
          ></Image>
          <span>Bootstrap</span>
        </div>
      </div>
    </div>
  );
}
