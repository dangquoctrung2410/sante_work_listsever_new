import { COLUMNS } from './Columns';
import { useEffect, useMemo } from 'react';
import styles from './Styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IWorklistItem } from '../../models/reducers/worklist.model';
import { getWorklist } from '../../reducers/slice/worklistSlice';
import { Table } from 'antd';

type Props = {};

const Tables = (_props: Props) => {
  const columns = useMemo(() => COLUMNS, []);

  const dispatch = useAppDispatch();
  const worklistData: Array<IWorklistItem> = useAppSelector(
    (state) => state.worklist,
  );

  useEffect(() => {
    dispatch(getWorklist());
  }, []);

  const newData = worklistData.map((item) => item.elements);

  return (
    <div className={styles.table}>
      <Table columns={columns} dataSource={newData} />
    </div>
  );
};

export default Tables;
