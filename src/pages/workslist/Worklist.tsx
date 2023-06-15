import { Button, Layout } from 'antd';
import styles from './Style.module.scss';

const { Header, Content } = Layout;
type Props = {};

const Worklist = (_props: Props) => {
  return (
    <div className={styles.container}>
      <Layout className={styles.main}>
        <Header className={styles.headerMain}>
          <div className={styles.header}>header</div>
        </Header>
        <Layout className={styles.mainContent}>
          <Content className={styles.contentItem}>
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
                  <div></div>
                  <div></div>
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
                  <div></div>
                </div>
              </div>
            </div>
            <Content className={styles.content}>
              <Header className={styles.contentHeader}>
                <div className={styles.contentHeaderText}>Work Database</div>
              </Header>
              <Content className={styles.contentMain}>
                <div className={styles.contentMainItem}></div>
              </Content>
            </Content>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Worklist;
