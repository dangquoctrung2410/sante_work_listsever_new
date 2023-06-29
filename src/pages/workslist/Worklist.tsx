import { Layout } from 'antd';
import styles from './Style.module.scss';
import Contents from '../../layout/content/Content';
import { useSelector } from 'react-redux';
import ContentHeaderSetup from '../../layout/container/contents/ContentHeaderSetup';
import SiderLeftLayout from '../../layout/siderbarleftlayout/SiderLeftLayout';

const { Sider } = Layout;
type Props = {};

const WorklistPage = (_props: Props) => {
  const openTable = useSelector((state: any) => state.table);

  return (
    <div className={styles.container}>
      <Layout className={styles.main}>
        <Sider className={styles.siderLeft}>
          <SiderLeftLayout />
        </Sider>
        <Layout className={styles.mainContent}>
          {openTable ? <ContentHeaderSetup /> : <Contents />}
        </Layout>
      </Layout>
    </div>
  );
};

export default WorklistPage;
