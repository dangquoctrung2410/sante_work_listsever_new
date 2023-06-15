import { Layout } from 'antd';
import styles from './Style.module.scss';
import Sidebars from '../sidebar/Sidebars';
const { Header, Content } = Layout;

type Props = {};

const Contents = (_props: Props) => {
  return (
    <Content className={styles.contentItem}>
      <Sidebars />
      <Content className={styles.content}>
        <Header className={styles.contentHeader}>
          <div className={styles.contentHeaderText}>Work Database</div>
        </Header>
        <Content className={styles.contentMain}>
          <div className={styles.contentMainItem} />
        </Content>
      </Content>
    </Content>
  );
};

export default Contents;
