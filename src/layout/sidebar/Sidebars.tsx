import styles from './Style.module.scss';
import { Layout } from 'antd';
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
            <p>Study date form</p>
            <input type="date" />
            <p>Study date to</p>
            <input type="date" />
            <button>Search all</button>
          </div>
          {/* <div className={styles.form}>
            <p>Study date form</p>
            <input type="date" />
            <p>Study date to</p>
            <input type="date" />
            <button>Search all</button>
          </div> */}
        </div>
      </div>
      <div className={styles.siderCell}>
        <Header className={styles.header}>
          <div className={styles.text}>Modality</div>
        </Header>
        <div className={styles.siderCellMain}>
          <div>
            <select name="1" id="">
              <option value="aaa">aaa</option>
              <option value="aaa">aaa</option>
              <option value="aaa">aaa</option>
            </select>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Sidebars;
