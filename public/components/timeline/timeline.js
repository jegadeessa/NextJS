import styles from "../../../styles/timeline.module.scss";

export default function Timeline() {
  return (
    <div className={styles.timelineWrap}>
      <h3 className={styles.timelineWrap__title}>Timeline</h3>
      <div className={styles.timelineWrap__details}>
        <div className={styles.timelineWrap__details__card}>
          <h3>SSLC</h3>
          <span>2011-2013</span>
          <span>D.D.Vinayagar Higher Secondary school, Ramanathapuram</span>
        </div>
        <div className={styles.timelineWrap__details__card}>
          <h3>HSC</h3>
          <span>2013-2015</span>
          <span>Syed Ammal Higher Secondary School, Ramanathapuram</span>
        </div>
        <div className={styles.timelineWrap__details__card}>
          <h3>B.E(EEE)</h3>
          <span>2015-2019</span>
          <span>Karpagam College Of Engineering, Coimbatore</span>
        </div>
      </div>
    </div>
  );
}
