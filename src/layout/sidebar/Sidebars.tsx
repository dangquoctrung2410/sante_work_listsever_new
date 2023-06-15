import styles from './Style.module.scss';
import { Button, Layout } from 'antd';
const { Header } = Layout;

type Props = {};

const Sidebars = (_props: Props) => {
  return (
    <div className={styles.sider}>
      <div className={styles.siderCell}>
        <Header className={styles.header}>
          <div className={styles.text}>Search Database</div>
        </Header>
        <div className={styles.siderCellMain}>
          <div className={styles.mainButton}>
            <button>Today</button>
            <button>Yesterday</button>
            <button>Last 7 day</button>
            <button>Search all</button>
          </div>
          <div className={styles.form}>
            <p>Study date form</p>
            <input type="date" />
          </div>
        </div>
      </div>
      <div className={styles.siderCell}>
        <Header className={styles.header}>
          <div className={styles.text}>Query Options</div>
        </Header>
        <div className={styles.siderCellMain}>
          <div />
          <div />
        </div>
      </div>
      <div className={styles.siderCell}>
        <Header className={styles.header}>
          <div className={styles.text}>Modality</div>
        </Header>
        <div className={styles.siderCellMain}>
          <div>
            <Button type="primary">a</Button>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Sidebars;
