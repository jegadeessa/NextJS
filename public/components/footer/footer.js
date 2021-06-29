import Image from "next/image";

import styles from "../../../styles/footer.module.scss";

import facebookLogo from "../../assets/images/facebook.svg";
import linkedInLogo from "../../assets/images/linkedin.svg";
import gitHubLogo from "../../assets/images/github.svg";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerWrap}>
        <div className={styles.footerWrap__contactSec}>
          <h1 className={styles.footerWrap__title}>Contact me</h1>
          <div className={styles.footerWrap__contactSec__details}>
            <span className={styles.footerWrap__contactSec__details__label}>
              Phone No:
            </span>
            <span className={styles.footerWrap__contactSec__details__value}>
              +91-9629901123
            </span>
          </div>
          <div className={styles.footerWrap__contactSec__details}>
            <span className={styles.footerWrap__contactSec__details__label}>
              Email:
            </span>
            <span className={styles.footerWrap__contactSec__details__value}>
              jegadeessa007@gmail.com
            </span>
          </div>
        </div>
        <div className={styles.footerWrap__socialMediaSec}>
          <h1 className={styles.footerWrap__title}>Let&apos;s connect</h1>
          <div className={styles.footerWrap__socialMediaSec__links}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jegadees-rajapandian-4b4165150/"
            >
              {" "}
              <Image
                src={linkedInLogo}
                width={24}
                height={24}
                alt="Linked In"
              ></Image>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100011780024538"
            >
              {" "}
              <Image
                src={facebookLogo}
                width={24}
                height={24}
                alt="Linked In"
              ></Image>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jegadeessa?tab=repositories"
            >
              {" "}
              <Image
                src={gitHubLogo}
                width={24}
                height={24}
                alt="Github"
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
