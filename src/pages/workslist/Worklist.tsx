import { Layout } from 'antd';
import styles from './Style.module.scss';
import Headers from '../../layout/header/Header';
import Contents from '../../layout/content/Content';

const { Header } = Layout;
type Props = {};

const Worklist = (_props: Props) => {
  return (
    <div className={styles.container}>
      <Layout className={styles.main}>
        <Header className={styles.headerMain}>
          <Headers />
        </Header>
        <Layout className={styles.mainContent}>
          <Contents />
        </Layout>
      </Layout>
    </div>
  );
};

export default Worklist;
