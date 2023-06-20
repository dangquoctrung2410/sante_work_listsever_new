import { useState } from 'react';
import { potsWorklist } from '../../reducers/slice/worklistSlice';
import { useAppDispatch } from '../../redux/store';
import styles from './/Styles.module.scss';

type Props = {};

const HeaderWorkListConfigContent = (_props: Props) => {
  const [data, setData] = useState({
    host: '',
    port: 0,
    AETitle: '',
  });

  const dispatch = useAppDispatch();
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

  return (
    <div className={styles.container}>
      <div className={styles.contentTop}>
        <div className={styles.left}>
          <span>Worklist Sever</span>
          <div className={styles.leftContent}>
            <div className={styles.itemLeft}>
              <div>
                <label>Remote AE:</label>
                <input
                  type="text"
                  value={data.host}
                  onChange={(e) => setData({ ...data, host: e.target.value })}
                />
              </div>
              <div>
                <label>Remote IP:</label>
                <input
                  type="text"
                  value={data.AETitle}
                  onChange={(e) =>
                    setData({ ...data, AETitle: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Remote Port:</label>
                <input
                  type="number"
                  value={data.port}
                  onChange={(e) =>
                    setData({ ...data, port: Number(e.target.value) })
                  }
                />
              </div>
            </div>
            <div className={styles.itemRight}>
              <button className={styles.buttonright} onClick={onSubmit}>
                Test
              </button>
              <button className={styles.buttonbottom}>Add</button>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWorkListConfigContent;
