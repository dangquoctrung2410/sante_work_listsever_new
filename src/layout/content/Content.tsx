import { Button, Form, Layout, Modal } from 'antd';
import styles from './Style.module.scss';
import Sidebars from '../sidebar/Sidebars';
import Tables from '../../components/table/Table';
// import type { DatePickerProps } from 'antd';
import { DatePicker, Input, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import {
  DeleteOutlined,
  PlusSquareOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { useAppDispatch } from '../../redux/store';
import {
  createPatient,
  getAllPatient,
} from '../../reducers/slice/worklistSlice';
import FormItem from 'antd/es/form/FormItem';

const { Header, Content } = Layout;
const { RangePicker } = DatePicker;

type Props = {};

const Contents = (_props: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dispatch = useAppDispatch();
  const [dataPatient, setDataPatient] = useState({
    patientName: '',
    modality: '',
    // startDate: '',
    // endDate: '',
  });

  useEffect(() => {
    dispatch(
      getAllPatient({
        pageindex: 1,
        modality: dataPatient.modality,
        patientName: dataPatient.patientName,
      }),
    );
  }, []);

  const handleSearch = async () => {
    const res = await {
      patientName: dataPatient.patientName,
      modality: dataPatient.modality,
      // startDate: dataPatient.startDate,
      // endDate: dataPatient.endDate,
    };
    console.log(res);

    dispatch(
      getAllPatient({
        pageindex: 1,
        modality: dataPatient.modality,
        patientName: dataPatient.patientName,
      }),
    );
  };

  const handleClearAll = () => {
    setDataPatient({
      patientName: '',
      modality: '',
      // startDate: '',
      // endDate: '',
    });
  };

  const handleButtonAdd = () => {
    setIsOpenModal(!isOpenModal);
  };

  const onFinish = async (values: any) => {
    const response = await dispatch(
      createPatient({
        patientId: values.patientId,
        patientName: values.patientName,
        patientCode: values.patientCode,
        modality: values.modality,
        serviceName: values.serviceName,
      }),
    );
    console.log(response);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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
                  placeholder="Modality"
                  value={dataPatient.modality}
                  onChange={(e) =>
                    setDataPatient({
                      ...dataPatient,
                      modality: e.target.value,
                    })
                  }
                />
              </Col>
              <Col className={styles.col} span={12}>
                <RangePicker
                // onChange={(date: any) =>
                //   setDataPatient({
                //     ...dataPatient,
                //     startDate: date[0].format(),
                //     endDate: date[1].format(),
                //   })
                // }
                />
                <Button
                  shape="round"
                  type="primary"
                  icon={<SearchOutlined />}
                  onClick={handleSearch}
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
                <Button
                  style={{ marginLeft: '120px' }}
                  type="primary"
                  icon={<PlusSquareOutlined />}
                  onClick={handleButtonAdd}
                >
                  Add
                </Button>
              </Col>
            </Row>
            <Tables />
          </div>
        </Content>
      </Content>
      <Modal
        title="CREATE PATIENT"
        open={isOpenModal}
        onOk={() => {
          setIsOpenModal(!isOpenModal);
        }}
        onCancel={() => {
          setIsOpenModal(!isOpenModal);
        }}
        style={{
          textAlign: 'center',
          padding: '5px',
          background: '#ffa940',
          // ' linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%',
          borderRadius: '5px',
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          style={{
            maxWidth: 600,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '20px',
            borderRadius: '5px',
          }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <FormItem
            label="patientId"
            name="patientId"
            rules={[{ message: 'Please input your username!' }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="patientName"
            name="patientName"
            rules={[{ message: 'Please input your username!' }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="patientCode"
            name="patientCode"
            rules={[{ message: 'Please input your username!' }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="modality"
            name="modality"
            rules={[{ message: 'Please input your username!' }]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="serviceName"
            name="serviceName"
            rules={[{ message: 'Please input your username!' }]}
          >
            <Input />
          </FormItem>
          <FormItem wrapperCol={{ offset: 8, span: 8 }}>
            <Button type="primary" htmlType="submit">
              SUBMIT
            </Button>
          </FormItem>
        </Form>
      </Modal>
    </Content>
  );
};

export default Contents;
