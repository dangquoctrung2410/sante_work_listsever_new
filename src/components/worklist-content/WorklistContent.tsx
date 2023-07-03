import {
  Button,
  DatePicker,
  Form,
  Input,
  Layout,
  Modal,
  Space,
  Typography,
  theme,
} from 'antd';
import styles from './style.module.scss';

import { useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { IWorklist } from '../../models/reducers/worklist.model';
import dayjs from 'dayjs';
import {
  createPatient,
  getWorklist,
  setQueryParamsWorklist,
} from '../../reducers/slice/worklistSlice';
import { DEFAULT } from '../../utils/constants';
import { format } from '../../utils/dateTime';
import WorklistTable from '../woklist-table/WorklistTable';
const { RangePicker } = DatePicker;
const { useToken } = theme;

const { Sider, Content, Header } = Layout;
type Props = {};

const WorklistContent = (_props: Props) => {
  const { token } = useToken();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const worklist: IWorklist = useAppSelector((root: RootState) => {
    return root.worklist;
  });

  useEffect(() => {
    const queryParams = worklist.queryParams;
    const startDate = dayjs(queryParams.startDate)
      .startOf('date')
      .toDate()
      .toISOString();
    const endDate = dayjs(queryParams.endDate)
      .endOf('date')
      .toDate()
      .toISOString();
    dispatch(
      getWorklist({
        startDate,
        endDate,
        limit: DEFAULT.limit,
      }),
    );
  }, []);

  const onSearch = async (values: any) => {
    const startDate = dayjs(values.startDate)
      .startOf('date')
      .toDate()
      .toISOString();
    const endDate = dayjs(values.endDate).endOf('date').toDate().toISOString();
    const patientCode = values.patientCode;
    const patientName = values.patientName;
    const patientId = values.patientId;

    dispatch(
      setQueryParamsWorklist({
        startDate,
        endDate,
        filter: { patientCode, patientName, patientId },
      }),
    );
    dispatch(
      getWorklist({
        startDate,
        endDate,
        limit: DEFAULT.limit,
        filter: { patientCode, patientName, patientId },
      }),
    );
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
  return (
    <Layout
      className={styles.main}
      style={{
        background: token.colorBgLayout,
        borderRadius: token.borderRadius,
      }}
    >
      <Sider
        className={styles.sider}
        style={{
          background: token.colorBgLayout,
        }}
      >
        <Typography style={{ textAlign: 'center' }}>
          Danh sách máy chủ
        </Typography>
      </Sider>
      <Layout>
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
            autoComplete="off"
          >
            <Form.Item
              label="patientId"
              name="patientId"
              rules={[{ message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="patientName"
              name="patientName"
              rules={[{ message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="patientCode"
              name="patientCode"
              rules={[{ message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="modality"
              name="modality"
              rules={[{ message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="serviceName"
              name="serviceName"
              rules={[{ message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
              <Button type="primary" htmlType="submit">
                SUBMIT
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Header
          className={styles.header}
          style={{
            background: token.colorBgLayout,
          }}
        >
          <Form
            onFinish={onSearch}
            initialValues={{
              searchDate: [
                dayjs(worklist.queryParams.startDate),
                dayjs(worklist.queryParams.endDate),
              ],
            }}
          >
            <Space align="center" direction="horizontal">
              <Form.Item name="patientId" noStyle={true}>
                <Input type="text" placeholder="Patient ID" />
              </Form.Item>
              <Form.Item name="patientName" noStyle={true}>
                <Input type="text" placeholder="Patient Name" />
              </Form.Item>
              <Form.Item name="accessionNumber" noStyle={true}>
                <Input type="text" placeholder="Accession Number" />
              </Form.Item>
              <Form.Item name="searchDate" noStyle={true}>
                <RangePicker format={format} />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button type="primary" danger={true}>
                Clear
              </Button>
              <Button type="primary" onClick={handleButtonAdd}>
                Add
              </Button>
            </Space>
          </Form>
        </Header>
        <Content>
          <WorklistTable />
        </Content>
      </Layout>
    </Layout>
  );
};

export default WorklistContent;
