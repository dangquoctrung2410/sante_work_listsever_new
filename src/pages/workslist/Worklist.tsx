import { Layout } from 'antd';
import Worklist from '../../layout/container/content/worklist/Worklist';
import styles from './Style.module.scss';

const { Content } = Layout;
type Props = {};

const WorklistPage = (_props: Props) => {
  return (
    <div className={styles.container}>
      <Layout className={styles.main}>
        <Content>
          <Worklist />
        </Content>
      </Layout>
    </div>
  );
};

export default WorklistPage;
