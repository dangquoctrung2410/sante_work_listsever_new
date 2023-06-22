import styles from './Styles.module.scss';
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';

type Props = {};

const options: SelectProps['options'] = [];

for (let i = 11; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const HeaderSystemConfig = (_props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>Local</span>
        <div className={styles.main}>
          <div className={styles.mainTop}>
            <label>
              Host :
              <input type="text" />
            </label>
            <br />
            <label>
              AE Title :
              <input type="text" />
            </label>
            <br />
            <label>
              Port :
              <input type="text" />
            </label>
            <br />
            <label>
              Acepted :
              <input type="text" />
            </label>
            <br />
            <label>
              Stoge directory :
              <input type="text" />
            </label>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.title}>Ditector</span>
        <div className={styles.contentMain}>
          <div>
            <p>storageClassAccepted :</p>
            <Space style={{ width: '100%' }} direction="vertical">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                onChange={handleChange}
                options={options}
              />
            </Space>
          </div>
          <div>
            <p>sopClassAccepted :</p>
            <Space style={{ width: '100%' }} direction="vertical">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                onChange={handleChange}
                options={options}
              />
            </Space>
          </div>
          <div>
            <p>transcodableTransferSyntaxes :</p>
            <Space style={{ width: '100%' }} direction="vertical">
              <Select
                mode="multiple"
                allowClear
                style={{ width: '100%' }}
                onChange={handleChange}
                options={options}
              />
            </Space>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.title}>System setting</span>
        <div className={styles.contentMain}>
          <label>
            ImplementationClassUid :
            <input type="text" />
          </label>
          <br />
          <label>
            ImplementationVersion :
            <input type="text" />
          </label>
          <br />
          <label>
            MaxPduLength :
            <input type="text" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default HeaderSystemConfig;
