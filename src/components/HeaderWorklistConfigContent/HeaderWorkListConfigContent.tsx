import { useEffect, useState } from 'react';
import { addWorklist, potsWorklist } from '../../reducers/slice/worklistSlice';
import { useAppDispatch } from '../../redux/store';
import styles from './/Styles.module.scss';
import { getAllWorklist } from '../../reducers/slice/dicomNodeSlice';
import TableDicom from './TableDicom';

type Props = {};

const HeaderWorkListConfigContent = (_props: Props) => {
  // const newDataWorklist = useAppSelector((state) => state.dicomNode);
  // console.log(newDataWorklist);

  const dispatch = useAppDispatch();

  const [data, setData] = useState({
    host: '',
    port: 0,
    AETitle: '',
  });

  const [addData, setAddData] = useState({
    host: '',
    port: 0,
    aeTitle: '',
  });

  useEffect(() => {
    dispatch(getAllWorklist());
  }, []);

  const onSubmit = async () => {
    const response = await dispatch(
      potsWorklist({
        host: data.host,
        port: Number(data.port),
        AETitle: data.AETitle,
      }),
    );
    console.log(response);
  };

  const handleSubmit = async () => {
    const res = await dispatch(
      addWorklist({
        host: addData.host,
        port: Number(addData.port),
        aeTitle: addData.aeTitle,
      }),
    );
    dispatch(getAllWorklist());
    console.log(res);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentTop}>
        <div className={styles.top}>
          <span>Worklist Sever</span>
          <div className={styles.topContent}>
            <div className={styles.itemLeft}>
              <div>
                <label>host:</label>
                <input
                  type="text"
                  value={data.host || addData.host}
                  onChange={(e) => {
                    setData({ ...data, host: e.target.value });
                    setAddData({ ...addData, host: e.target.value });
                  }}
                />
              </div>
              <div>
                <label>AE Title:</label>
                <input
                  type="text"
                  value={data.AETitle || addData.aeTitle}
                  onChange={(e) => {
                    setData({ ...data, AETitle: e.target.value });
                    setAddData({ ...addData, aeTitle: e.target.value });
                  }}
                />
              </div>
              <div>
                <label>Remote Port:</label>
                <input
                  type="number"
                  value={data.port || addData.port}
                  onChange={(e) => {
                    setData({ ...data, port: Number(e.target.value) });
                    setAddData({ ...addData, port: Number(e.target.value) });
                  }}
                />
              </div>
            </div>
            <div className={styles.itemRight}>
              <button className={styles.buttonright} onClick={onSubmit}>
                Test
              </button>
              <button className={styles.buttonbottom} onClick={handleSubmit}>
                Add
              </button>
            </div>
            <div />
          </div>
          <div className={styles.bottomContent}>
            <TableDicom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWorkListConfigContent;
