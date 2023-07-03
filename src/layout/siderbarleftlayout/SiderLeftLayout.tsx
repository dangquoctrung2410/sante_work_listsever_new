import {
  BlockOutlined,
  BookOutlined,
  FolderOutlined,
  InfoCircleOutlined,
  PoweroffOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { setOpenTbale } from '../../reducers/slice/tableSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
// import { Paper } from '@mui/material';
// import MenuList from '@mui/material/MenuList';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ContentCut from '@mui/icons-material/ContentCut';

import styles from './Style.module.scss';
import { Button, Tooltip } from 'antd';

type Props = {};

const SiderLeftLayout = (_props: Props) => {
  const dispath = useAppDispatch();
  const openState = useAppSelector((state) => state.table);

  return (
    <div className={styles.header}>
      {/* <Paper sx={{ width: 100 }}>
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>Setup</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper> */}
      <div className={styles.headerContent}>
        <Tooltip placement="right" title={'Setup'}>
          <div
            className={styles.headerItem}
            onClick={() => dispath(setOpenTbale(!openState))}
          >
            <Button icon={<SettingOutlined />} />
          </div>
        </Tooltip>
        <Tooltip placement="left" title={'Report'}>
          <div className={styles.headerItem}>
            <Button icon={<BlockOutlined />} />
          </div>
        </Tooltip>
        <Tooltip placement="left" title={'Log Folder'}>
          <div className={styles.headerItem}>
            <Button icon={<FolderOutlined />} />
          </div>
        </Tooltip>
        <Tooltip placement="left" title={'Guide'}>
          <div className={styles.headerItem}>
            <Button icon={<BookOutlined />} />
          </div>
        </Tooltip>
        <Tooltip placement="left" title={'About'}>
          <div className={styles.headerItem}>
            <Button icon={<InfoCircleOutlined />} />
          </div>
        </Tooltip>
        <Tooltip placement="left" title={'Exit'}>
          <div className={styles.headerItem}>
            <Button icon={<PoweroffOutlined />} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default SiderLeftLayout;
