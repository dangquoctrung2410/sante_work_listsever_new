import { useState } from 'react';
import styles from './ConfigContent.module.scss';
import { Layout } from 'antd';
import HeaderWorkListConfigContent from '../HeaderWorklistConfigContent/HeaderWorkListConfigContent';
import HeaderSystemConfig from '../HeaderSystemConfig/HeaderSystemConfig';
import HeaderPrinterConfig from '../HeaderPrinterConfig/HeaderPrinterConfig';
const { Header, Footer, Content } = Layout;

type Props = {};

const dataActive = [
  {
    title: 'Worklist',
    active: true,
    content: <HeaderWorkListConfigContent />,
  },
  {
    title: 'Acquisition',
    active: false,
    content: 'b',
  },
  {
    title: 'System',
    active: false,
    content: <HeaderSystemConfig />,
  },
  {
    title: 'PACS',
    active: false,
    content: 'd',
  },
  {
    title: 'Printer',
    active: false,
    content: <HeaderPrinterConfig />,
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
              key={index}
              className={item.active ? styles.buttonActive : styles.button}
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
      <Footer className={styles.footer}>
        <button className={styles.footerbutton}>Apply</button>
      </Footer>
    </Layout>
  );
};

export default ConfigContent;
