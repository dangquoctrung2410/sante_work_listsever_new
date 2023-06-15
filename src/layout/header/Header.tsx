import styles from './Style.module.scss';

type Props = {};

const Headers = (_props: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerItem}>
          <img src={process.env.PUBLIC_URL + '/settings.png'} alt="" />
          <span>Setup</span>
        </div>
        <div className={styles.headerItem}>
          <img src={process.env.PUBLIC_URL + '/log-in.png'} alt="" />
          <span>Report</span>
        </div>
        <div className={styles.headerItem}>
          <img src={process.env.PUBLIC_URL + '/log.png'} alt="" />
          <span>Log Folder</span>
        </div>
        <div className={styles.headerItem}>
          <img src={process.env.PUBLIC_URL + '/guide.png'} alt="" />
          <span>Guide</span>
        </div>
        <div className={styles.headerItem}>
          <img src={process.env.PUBLIC_URL + '/information.png'} alt="" />
          <span>About</span>
        </div>
        <div className={styles.headerItem}>
          <img src={process.env.PUBLIC_URL + '/icons8-off-64.png'} alt="" />
          <span>Exit</span>
        </div>
      </div>
    </div>
  );
};

export default Headers;
