import { Input, Modal, Table } from 'antd';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
  deleteWorklist,
  getAllWorklist,
  updateWorklist,
} from '../../reducers/slice/dicomNodeSlice';
import { useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

type Props = {};

const TableDicom = (_props: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataDcom, setDataDcom] = useState<any>({});

  const dispath = useAppDispatch();
  const newDataWorklist = useAppSelector((state) => state.dicomNode);

  const columns = [
    {
      title: 'aetitle',
      dataIndex: 'aetitle',
      key: '1',
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',
      key: '2',
    },
    {
      title: 'host',
      key: '3',
      dataIndex: 'host',
    },

    {
      title: 'port',
      key: '4',
      dataIndex: 'port',
    },

    {
      title: 'Action',
      key: 'action',
      render: (record: any) => (
        <>
          <EditOutlined
            onClick={() => handleUpdate(record)}
            style={{ color: 'blue' }}
          />
          <DeleteOutlined
            onClick={() => handleDelete(record)}
            style={{ color: 'red', padding: '0 5px', marginLeft: '50px' }}
          />
        </>
      ),
    },
  ];
  const handleUpdate = (record: any) => {
    console.log(record);

    setIsOpenModal(true);
    setDataDcom({
      host: record.host,
      id: record.id,
      port: record.port,
      description: record.description,
      aeTitle: record.aetitle,
    });
  };

  const handleDelete = (record: any) => {
    dispath(deleteWorklist(record.id));
    dispath(getAllWorklist());
  };

  return (
    <div>
      <Table
        key={columns[0].key}
        columns={columns}
        dataSource={newDataWorklist.data}
        size="small"
      />
      <Modal
        title="Modal"
        open={isOpenModal}
        onOk={() => {
          const data = {
            id: dataDcom.id,
            data: {
              host: dataDcom.host,
              port: dataDcom.port,
              aetitle: dataDcom.aetitle,
            },
          };
          console.log(data);
          dispath(updateWorklist(data));
          dispath(getAllWorklist());

          setIsOpenModal(!isOpenModal);
        }}
        onCancel={() => setIsOpenModal(!isOpenModal)}
      >
        <label>host :</label>
        <Input
          onChange={(e) => {
            setDataDcom({ ...dataDcom, host: e.target.value });
          }}
          value={dataDcom.host}
        />
        <label>aetitle :</label>

        <Input
          onChange={(e) => {
            setDataDcom({ ...dataDcom, aetitle: e.target.value });
          }}
          value={dataDcom.aetitle}
        />
        <label>port :</label>

        <Input
          onChange={(e) => {
            setDataDcom({ ...dataDcom, port: e.target.value });
          }}
          value={dataDcom.port}
        />
      </Modal>
    </div>
  );
};

export default TableDicom;
