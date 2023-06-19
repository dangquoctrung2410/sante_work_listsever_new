import { Layout } from 'antd';
import styles from './Style.module.scss';
import Headers from '../../layout/header/Header';
import Contents from '../../layout/content/Content';
import { useSelector } from 'react-redux';
import ContentHeaderSetup from '../../layout/container/contents/ContentHeaderSetup';

const { Header } = Layout;
type Props = {};

const WorklistPage = (_props: Props) => {
  const openTable = useSelector((state: any) => state.table);

  return (
    <div className={styles.container}>
      <Layout className={styles.main}>
        <Header className={styles.headerMain}>
          <Headers />
        </Header>
        <Layout className={styles.mainContent}>
          {openTable ? <ContentHeaderSetup /> : <Contents />}
        </Layout>
      </Layout>
    </div>
  );
};

export default WorklistPage;
