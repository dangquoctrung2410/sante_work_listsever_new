import styles from './/Styles.module.scss';

type Props = {};

const WorkListConfig = (_props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentTop}>
        <div className={styles.left}>
          <span>Worklist Sever</span>
          <div className={styles.leftContent}>
            <div className={styles.item}>
              <div>
                <label>Remote AE:</label>
                <input type="text" />
              </div>
              <div>
                <label>Remote IP:</label>
                <input type="text" />
              </div>
              <div>
                <label>Remote Port:</label>
                <input type="text" />
              </div>
              <div>
                <label>RAD Code Setting:</label>
                <input type="text" />
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.contentBottom}></div>
    </div>
  );
};

export default WorkListConfig;
