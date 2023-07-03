import { SettingFilled } from '@ant-design/icons';
import { Button, Checkbox, Popover, Space, Table } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { IWorklist } from '../../models/reducers/worklist.model';
import {
  getWorklist,
  setQueryParamsWorklist,
} from '../../reducers/slice/worklistSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';

type Props = {};

const WorklistTable = (_props: Props) => {
  const dispatch = useAppDispatch();
  const worklist: IWorklist = useAppSelector((root: RootState) => {
    return root.worklist;
  });

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

  const { data, meta } = worklist.worklistData;

  const columnData = [
    {
      title: () => {
        return (
          <Popover
            content={
              <Space direction="vertical">
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
            <Button type="link" icon={<SettingFilled />} />
          </Popover>
        );
      },
      key: '0',
      dataIndex: 'key',
      visible: true,
      ellipsis: true,
    },
    ...column.filter((col) => col.visible),
  ];

  return (
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
  );
};

export default WorklistTable;
