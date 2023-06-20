import styles from './Styles.module.scss';

type Props = {};

const HeaderSystemConfig = (_props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span>Local</span>
        <div className={styles.main}>
          <div className={styles.mainTop}>
            <label>
              AE Title:
              <input type="text" />
            </label>
            <br />
            <label>
              Station Name:
              <input type="text" />
            </label>
            <br />
            <label>
              Modality:
              <input type="text" />
            </label>
            <br />
            <label>
              Modality:
              <input type="text" />
            </label>
            <br />
            <label>
              Modality:
              <input type="text" />
            </label>
          </div>
          <div className={styles.mainBottom}></div>
        </div>
      </div>
      <div className={styles.content}>
        <span>Ditector</span>
      </div>
      <div className={styles.content}>
        <span>System setting</span>
      </div>
    </div>
  );
};

export default HeaderSystemConfig;
