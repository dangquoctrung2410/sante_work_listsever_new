import { useState } from 'react';
import styles from './ConfigContent.module.scss';
import { Layout } from 'antd';
import WorkListConfig from '../WorklistConfigContent/WorkListConfig';
const { Header, Footer, Content } = Layout;

type Props = {};

const dataActive = [
  {
    title: 'Worlist',
    active: true,
    content: <WorkListConfig />,
  },
  {
    title: 'Acquisition',
    active: false,
    content: 'b',
  },
  {
    title: 'System',
    active: false,
    content: 'c',
  },
  {
    title: 'PACS',
    active: false,
    content: 'd',
  },
  {
    title: 'Printer',
    active: false,
    content: 'e',
  },
  {
    title: 'Annotation',
    active: false,
    content: 'f',
  },
  {
    title: 'Protocol',
    active: false,
    content: 'g',
  },
  {
    title: 'RAD code',
    active: false,
    content: 'h',
  },
  {
    title: 'Rejected Code',
    active: false,
    content: 'i',
  },
];

const ConfigContent = (_props: Props) => {
  const [active, setActive] = useState(dataActive);

  const handleActiveButton = (index: any) => {
    const dataClone: Array<any> = [];
    if (active[index]) {
      active.forEach((i) => {
        dataClone.push({ ...i, active: false });
      });
      dataClone[index].active = true;
    }
    setActive(dataClone);
  };
  return (
    <Layout className={styles.layout}>
      <Layout className={styles.layoutContent}>
        <Header className={styles.header}>
          {active.map((item, index) => (
            <div
              onClick={() => handleActiveButton(index)}
              style={{
                backgroundColor: item.active ? '#ffa940' : '#dddd',
              }}
              key={index}
              className={styles.button}
            >
              {item.title}
            </div>
          ))}
        </Header>
        <Content className={styles.content}>
          {active.map(
            (item, index) =>
              item.active && (
                <div key={index} className={styles.contentMain}>
                  {item.content}
                </div>
              ),
          )}
        </Content>
      </Layout>
      <Footer className={styles.footer}>footer</Footer>
    </Layout>
  );
};

export default ConfigContent;
