import { Button, Layout } from 'antd';
import styles from './Styles.module.scss';
import { useState } from 'react';
import WorkListContent from '../../../components/worklistcontent/WorkListContent';
import AcquissitonContent from '../../../components/acquissitioncontent/AcquissitonContent';
import ReviewContent from '../../../components/reviewcontent/ReviewContent';
import ConfigContent from '../../../components/config/ConfigContent';
const { Content, Sider } = Layout;

type Props = {};

const ContentHeaderSetup = (_props: Props) => {
  const Item = [
    {
      title: 'Worklist',
      active: false,
      content: <WorkListContent />,
    },
    {
      title: 'Acquisition',
      active: false,
      content: <AcquissitonContent />,
    },
    {
      title: 'Reviews',
      active: false,
      content: <ReviewContent />,
    },
    {
      title: 'Config',
      active: true,
      content: <ConfigContent />,
    },
  ];
  const [active, setActive] = useState(Item);

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
    <Content className={styles.main}>
      <Sider className={styles.sider}>
        <div className={styles.div}>
          <div className={styles.divChildren}>
            {active.map((item, index) => (
              <Button
                key={index}
                className={
                  item.active ? styles.buttonIconActive : styles.buttonIcon
                }
                onClick={() => handleActiveButton(index)}
              >
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      </Sider>
      <Content className={styles.contentMain}>
        {active.map(
          (item, index) =>
            item.active && (
              <div className={styles.divMain} key={index}>
                {item.content}
              </div>
            ),
        )}
      </Content>
    </Content>
  );
};

export default ContentHeaderSetup;
