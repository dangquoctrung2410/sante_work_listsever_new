import { Layout } from 'antd';
import styles from './Style.module.scss';
import Headers from '../../layout/header/Header';
import Contents from '../../layout/content/Content';
import { useSelector } from 'react-redux';
import MainTable from '../../layout/maintable/MainTable';

const { Header } = Layout;
type Props = {};

const Worklist = (_props: Props) => {
  const openTable = useSelector((state: any) => state.table);
  console.log(openTable);

  return (
    <div className={styles.container}>
      <Layout className={styles.main}>
        <Header className={styles.headerMain}>
          <Headers />
        </Header>
        <Layout className={styles.mainContent}>
          {openTable ? <MainTable /> : <Contents />}
        </Layout>
      </Layout>
    </div>
  );
};

export default Worklist;
