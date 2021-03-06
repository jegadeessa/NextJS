import Image from "next/image";

import styles from "../../../styles/skills.module.scss";

export default function Skills({ skills }) {
  return (
    <div
      className={styles.skillsWrap}
      data-aos="fade-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <h3 className={styles.skillsWrap__title}>Top Skills</h3>
      <div className={styles.skillsWrap__details}>
        {skills.map((skill, index) => {
          return (
            <div className={styles.skillsWrap__details__card} key={index}>
              <Image
                src={`/assets/images/skills/${
                  skill.split(" ")[0].toLowerCase() || "sass"
                }.png`}
                width={36}
                height={36}
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
