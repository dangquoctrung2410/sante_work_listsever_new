import { SettingOutlined } from '@ant-design/icons';
import { setOpenTbale } from '../../reducers/slice/tableSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './Style.module.scss';
import { Button, Tooltip } from 'antd';

type Props = {};

const SiderLeftLayout = (_props: Props) => {
  const dispath = useAppDispatch();
  const openState = useAppSelector((state) => state.table);

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <Tooltip placement="bottom" title={'Setup'}>
          <div
            className={styles.headerItem}
            onClick={() => dispath(setOpenTbale(!openState))}
          >
            <Button icon={<SettingOutlined />} type="primary"></Button>
          </div>
        </Tooltip>

        <div className={styles.headerItem}>
          <img src={process.env.PUBLIC_URL + '/log-in.png'} alt="" />
          <span>Report</span>
        </div>
        <div className={styles.headerItem}>
          <img src={process.env.PUBLIC_URL + '/log.png'} alt="" />
          <span>Log Folder</span>
        </div>
        <div className={styles.headerItem}>
          <img src={process.env.PUBLIC_URL + '/guide.png'} alt="" />
          <span>Guide</span>
        </div>
        <div className={styles.headerItem}>
          <img src={process.env.PUBLIC_URL + '/information.png'} alt="" />
          <span>About</span>
        </div>
        <div className={styles.headerItem}>
          <img src={process.env.PUBLIC_URL + '/icons8-off-64.png'} alt="" />
          <span>Exit</span>
        </div>
      </div>
    </div>
  );
};

export default SiderLeftLayout;
