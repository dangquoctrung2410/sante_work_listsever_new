import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Layout,
  Popover,
  Space,
  Table,
  theme,
  Typography,
} from 'antd';
import dayjs from 'dayjs';
import { IWorklist } from '../../../../models/reducers/worklist.model';
import {
  getWorklist,
  setQueryParamsWorklist,
} from '../../../../reducers/slice/worklistSlice';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../../../../redux/store';
import { format } from '../../../../utils/dateTime';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  ClockCircleOutlined,
  DesktopOutlined,
  SettingFilled,
  SettingOutlined,
} from '@ant-design/icons';

const { useToken } = theme;

const { Sider, Content, Header } = Layout;
const { RangePicker } = DatePicker;
type Props = {};

const Worklist = (_props: Props) => {
  const { token } = useToken();

  const [column, setColumn] = useState([
    {
      dataIndex: 'patientId',
      visible: true,
      title: 'Patient ID',
      key: '1',
      ellipsis: true,
      sorter: true,
    },
    {
      dataIndex: 'patientName',
      visible: true,
      title: 'Patient Name',
      key: '2',
      ellipsis: true,
      sorter: true,
    },
    {
      dataIndex: 'patientCode',
      visible: true,
      title: 'Patient Code',
      key: '3',
      ellipsis: true,
      sorter: true,
    },
    {
      dataIndex: 'accessionNumber',
      visible: true,
      title: 'Accession Number',
      key: '4',
      ellipsis: true,
      sorter: true,
    },
    {
      dataIndex: 'modality',
      visible: true,
      title: 'Modality',
      key: '5',
      ellipsis: true,
      sorter: true,
    },
    {
      dataIndex: 'scheduledAE',
      visible: true,
      title: 'Scheduled AE',
      key: '6',
      ellipsis: true,
    },
    {
      dataIndex: 'scheduledAction',
      visible: true,
      title: 'Scheduled Action',
      key: '7',
      ellipsis: true,
    },
    {
      dataIndex: 'requestedProcedure',
      visible: true,
      title: 'Requested Procedure',
      key: '8',
      ellipsis: true,
    },
  ]);

  const dispatch = useAppDispatch();
  const worklist: IWorklist = useAppSelector((root: RootState) => {
    return root.worklist;
  });
  const { data, meta } = worklist.worklistData;

  const columnData = [
    {
      title: () => {
        return (
          <Popover
            content={
              <Space
                direction="vertical"
                style={{
                  padding: 5,
                  background: token.colorBgLayout,
                  borderRadius: token.borderRadius,
                }}
              >
                {column.map((col, idx) => (
                  <Checkbox
                    onChange={() => {
                      const columnClone = [...column];
                      columnClone[idx].visible = !columnClone[idx].visible;
                      setColumn(columnClone);
                    }}
                    key={idx}
                    checked={col.visible}
                  >
                    {col.title}
                  </Checkbox>
                ))}
              </Space>
            }
          >
            <Button type="link" icon={<SettingFilled rev={undefined} />} />
          </Popover>
        );
      },
      key: '0',
      dataIndex: 'key',
      visible: true,
      ellipsis: true,
    },
    ,
    ...column.filter((column) => column.visible),
  ];

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
        limit: meta.itemsPerPage,
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
        limit: meta.itemsPerPage,
        filter: { patientCode, patientName, patientId },
      }),
    );
  };
  return (
    <Layout className={styles.main}>
      <Sider width={40}>
        <Space
          style={{
            background: token.colorBgLayout,
          }}
          direction="vertical"
          className={styles.tab}
          align="center"
        >
          <Button icon={<DesktopOutlined rev={undefined} />}></Button>
          <Button icon={<SettingOutlined rev={undefined} />}></Button>
          <Button icon={<ClockCircleOutlined rev={undefined} />}></Button>
          <Button icon={<AppstoreOutlined rev={undefined} />}></Button>
        </Space>
      </Sider>

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
      <Content>
        <Layout
          className={styles.main}
          style={{
            background: token.colorBgLayout,
            borderRadius: token.borderRadius,
          }}
        >
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
              </Space>
            </Form>
          </Header>
          <Content>
            <Table
              onChange={(pagination, _filters, sorter: any) => {
                const queryParams = worklist.queryParams;
                const startDate = dayjs(queryParams.startDate)
                  .startOf('date')
                  .toDate()
                  .toISOString();
                const endDate = dayjs(queryParams.endDate)
                  .endOf('date')
                  .toDate()
                  .toISOString();
                const patientCode = queryParams?.filter?.patientCode;
                const patientName = queryParams?.filter?.patientName;
                const patientId = queryParams?.filter?.patientId;
                const sortBy = `${sorter?.field}:${
                  sorter?.order === 'ascend' ? 'ASC' : 'DESC' || undefined
                }`;

                dispatch(
                  setQueryParamsWorklist({
                    startDate,
                    endDate,
                    sortBy,
                    limit: meta.itemsPerPage,
                    page: pagination.current,
                    filter: { patientCode, patientName, patientId },
                  }),
                );
                dispatch(
                  getWorklist({
                    startDate,
                    endDate,
                    sortBy,
                    limit: meta.itemsPerPage,
                    page: pagination.current,
                    filter: { patientCode, patientName, patientId },
                  }),
                );
              }}
              scroll={{ y: 780 }}
              style={{ width: '100%', height: '100%' }}
              pagination={{
                total: meta.totalPages,
                current: meta.currentPage,
                pageSize: meta.itemsPerPage,
              }}
              columns={columnData as any}
              dataSource={data}
              size="middle"
            />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Worklist;
