import { Layout } from 'antd';
const { Header } = Layout;

type Props = {};

const WorkListContent = (_props: Props) => {
  return (
    <Layout style={{ width: '100%', height: '100%' }}>
      <Header>header</Header>
    </Layout>
  );
};

export default WorkListContent;
