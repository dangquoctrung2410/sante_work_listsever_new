import { useEffect, useState } from 'react';
import styles from './Styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IDataPatient } from '../../models/reducers/worklist.model';
import { Input, Modal, Space, Table } from 'antd';
import {
  deletePatient,
  getAllPatient,
  updatePatient,
} from '../../reducers/slice/worklistSlice';
import {
  SorterResult,
  TablePaginationConfig,
  FilterValue,
} from 'antd/es/table/interface';

type Props = {};

const Tables = (_props: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataPatient, setDataPatient] = useState<any>({});

  const dispatch = useAppDispatch();
  const patientData: Array<IDataPatient> = useAppSelector(
    (state) => state.worklist,
  );

  useEffect(() => {
    dispatch(getAllPatient({ pageindex: 1, modality: undefined }));
  }, []);

  const columns: any = [
    {
      title: 'Patient ID',
      key: '1',
      dataIndex: 'patientId',
      ellipsis: true,
      sorter: true,
    },
    {
      title: 'Patient Name',
      key: '2',
      dataIndex: 'patientName',
      ellipsis: true,
      sorter: true,
    },
    {
      title: 'Accession Number',
      dataIndex: 'accessionNumber',
      key: '3',
      ellipsis: true,
    },
    {
      title: 'Patient Code',
      dataIndex: 'patientCode',
      key: '4',
      ellipsis: true,
      sorter: true,
    },
    {
      title: 'Modality',
      dataIndex: 'modality',
      key: '5',
      ellipsis: true,
      sorter: true,
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',

      key: '13',
      ellipsis: true,
    },
    {
      title: 'updatedAt',
      dataIndex: 'updatedAt',
      key: '14',
      ellipsis: true,
    },
    {
      title: 'Requested Procedure ID',
      key: '15',
      ellipsis: true,
    },
    {
      title: 'Action',
      key: '16',
      ellipsis: true,
      render: (record: any) => (
        <Space>
          <a onClick={() => handleUpdate(record)}>update</a>
          <a onClick={() => handleDelete(record)}>delete</a>
        </Space>
      ),
    },
  ];

  const handleUpdate = (record: any) => {
    setIsOpenModal(true);
    setDataPatient({
      patientName: record.patientName,
      patientCode: record.patientCode,
      modality: record.modality,
      id: record.id,
    });
  };

  const handleDelete = (record: any) => {
    dispatch(deletePatient(record.id));
    dispatch(
      getAllPatient({ pageindex: 1, modality: undefined, sortBy: undefined }),
    );
  };

  const handleTableChange = (
    _pagination: TablePaginationConfig | any,
    _filters: Record<string, FilterValue> | any,
    sorter: SorterResult<any> | any,
  ) => {
    console.log(sorter);
    const sortField = sorter.field;
    const order =
      sorter.order === 'ascend'
        ? 'ASC'
        : sorter.order === 'descend'
        ? 'DESC'
        : undefined;
    console.log(sortField, order);

    dispatch(
      getAllPatient({
        pageindex: 1,
        modality: undefined,
        sortBy: order === undefined ? undefined : `${sortField}:${order}`,
      }),
    );
  };

  return (
    <div className={styles.table}>
      <Table
        pagination={{ pageSize: 20, total: 200 }}
        key={columns.key}
        columns={columns}
        dataSource={patientData}
        size="small"
        onChange={handleTableChange}
      />
      <Modal
        title="Modal"
        open={isOpenModal}
        onOk={() => {
          const data = {
            id: dataPatient.id,
            data: {
              patientName: dataPatient.patientName,
              patientCode: dataPatient.patientCode,
              modality: dataPatient.modality,
            },
          };

          dispatch(updatePatient(data));
          dispatch(getAllPatient({ pageindex: 1, modality: undefined }));
          setIsOpenModal(!isOpenModal);
        }}
        onCancel={() => setIsOpenModal(!isOpenModal)}
      >
        <label>patientName :</label>
        <Input
          value={dataPatient.patientName}
          onChange={(e) => {
            setDataPatient({ ...dataPatient, patientName: e.target.value });
          }}
        />
        <label>patientCode :</label>

        <Input
          value={dataPatient.patientCode}
          onChange={(e) => {
            setDataPatient({ ...dataPatient, patientCode: e.target.value });
          }}
        />
        <label>modality :</label>

        <Input
          value={dataPatient.modality}
          onChange={(e) => {
            setDataPatient({ ...dataPatient, modality: e.target.value });
          }}
        />
      </Modal>
    </div>
  );
};

export default Tables;
