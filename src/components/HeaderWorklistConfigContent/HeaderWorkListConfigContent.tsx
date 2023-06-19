import styles from './/Styles.module.scss';

type Props = {};

const HeaderWorkListConfigContent = (_props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentTop}>
        <div className={styles.left}>
          <span>Worklist Sever</span>
          <div className={styles.leftContent}>
            <div className={styles.itemLeft}>
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
            <div className={styles.itemRight}>
              <button className={styles.buttonleft}>a</button>
              <button className={styles.buttonright}>b</button>
            </div>
            <div />
          </div>
        </div>
        <div className={styles.right}>
          <span>Worklist Sever</span>
          <div className={styles.rightContent}>
            <div className={styles.itemLeft}>
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
            </div>
            <div className={styles.itemRight}>
              <button className={styles.buttonright}>a</button>
            </div>
            <div />
          </div>
        </div>
      </div>
      <div className={styles.contentBottom} />
    </div>
  );
};

export default HeaderWorkListConfigContent;
