import { Button, Layout } from 'antd';
import styles from './Style.module.scss';
import Sidebars from '../sidebar/Sidebars';
import Tables from '../../components/table/Table';
// import type { DatePickerProps } from 'antd';
import { DatePicker, Input, Row, Col } from 'antd';
import { useState } from 'react';
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
// import { useAppDispatch } from '../../redux/store';

const { Header, Content } = Layout;
const { RangePicker } = DatePicker;

type Props = {};

const Contents = (_props: Props) => {
  // const dispath = useAppDispatch();
  const [dataPatient, setDataPatient] = useState({
    patientName: '',
    patientID: '',
    startDate: '',
    endDate: '',
  });

  const handleSubmit = async () => {
    const res = await {
      patientName: dataPatient.patientName,
      patientID: dataPatient.patientID,
      startDate: dataPatient.startDate,
      endDate: dataPatient.endDate,
    };

    console.log(res);
  };

  const handleClearAll = () => {
    setDataPatient({
      patientName: '',
      patientID: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <Content className={styles.contentItem}>
      <Sidebars />
      <Content className={styles.content}>
        <Header className={styles.contentHeader}>
          <div className={styles.contentHeaderText}>Work Database</div>
        </Header>
        <Content className={styles.contentMain}>
          <div className={styles.contentMainItem}>
            <Row className={styles.row}>
              <Col className={styles.col} span={12}>
                <Input
                  type="text"
                  prefix={<SearchOutlined />}
                  size="small"
                  placeholder="Patient Name"
                  value={dataPatient.patientName}
                  onChange={(e) =>
                    setDataPatient({
                      ...dataPatient,
                      patientName: e.target.value,
                    })
                  }
                />
                <Input
                  type="text"
                  prefix={<SearchOutlined />}
                  placeholder="Patient ID"
                  value={dataPatient.patientID}
                  onChange={(e) =>
                    setDataPatient({
                      ...dataPatient,
                      patientID: e.target.value,
                    })
                  }
                />
              </Col>
              <Col className={styles.col} span={12}>
                <RangePicker
                  onChange={(date: any) =>
                    setDataPatient({
                      ...dataPatient,
                      startDate: date[0].format(),
                      endDate: date[1].format(),
                    })
                  }
                />
                <Button
                  shape="round"
                  type="primary"
                  icon={<SearchOutlined />}
                  onClick={handleSubmit}
                >
                  Search
                </Button>
                <Button
                  shape="round"
                  type="primary"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={handleClearAll}
                >
                  Clear All
                </Button>
              </Col>
            </Row>
            <Tables />
          </div>
        </Content>
      </Content>
    </Content>
  );
};

export default Contents;
