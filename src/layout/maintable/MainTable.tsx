import { Layout } from 'antd';
import styles from './Styles.module.scss';
const { Content, Header } = Layout;

type Props = {};

const MainTable = (_props: Props) => {
  return (
    <Content className={styles.contentItem}>
      <Header className={styles.header}/>
    </Content>
  );
};

export default MainTable;
