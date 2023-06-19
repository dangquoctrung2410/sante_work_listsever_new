import { COLUMNS } from './Columns';
import { useEffect, useMemo } from 'react';
import styles from './Styles.module.scss';
// import data from '../../mocks/response.json';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IWorklistItem } from '../../models/reducers/worklist.model';
import { getWorklist } from '../../reducers/slice/worklistSlice';
import { Table } from 'antd';

type Props = {};

const Tables = (_props: Props) => {
  const columns = useMemo(() => COLUMNS, []);
  // const cloneDta: Array<any> = data.data;

  const dispatch = useAppDispatch();
  const worklistData: Array<IWorklistItem> = useAppSelector(
    (state) => state.worklist,
  );

  useEffect(() => {
    dispatch(getWorklist());
  }, []);

  const newData = worklistData.map((item) => item.elements);

  return (
    <div className={styles.table}>
      <Table columns={columns} dataSource={newData}/>
    </div>
    // <table className={styles.table}>
    //   <thead>
    //     <tr className={styles.tr}>
    //       {columns.map((column) => (
    //         <th className={styles.th} key={column.key}>
    //           {column.title}
    //         </th>
    //       ))}
    //     </tr>
    //   </thead>

    //   {worklistData.map((patient, index: number) => (
    //     <tbody key={index}>
    //       <tr className={styles.tr}>
    //         <td className={styles.td}>{index + 1}</td>
    //         <td className={styles.td}>{patient.elements.PatientName}</td>
    //         <td className={styles.td}>{patient.elements.PatientID}</td>
    //         <td className={styles.td}>{patient.elements.StudyInstanceUID}</td>
    //         <td className={styles.td}>{patient.elements.PatientSex}</td>
    //         <td className={styles.td}>{patient.elements.AccessionNumber}</td>
    //         <td className={styles.td}>
    //           {patient.elements.RequestingPhysician}
    //         </td>
    //         <td className={styles.td}>
    //           {patient.elements.RequestedProcedureDescription}
    //         </td>
    //         <td className={styles.td}>{patient.elements.Modality}</td>
    //         <td className={styles.td}>{patient.elements.StudyDate}</td>
    //         <td className={styles.td}>{patient.elements.StudyTime}</td>
    //         <td className={styles.td}>{patient.elements.PatientName}</td>
    //         <td className={styles.td}>{patient.elements.PatientName}</td>
    //         <td className={styles.td}>
    //           {patient.elements.ReferringPhysicianName}
    //         </td>
    //         <td className={styles.td}></td>
    //         <td className={styles.td}>{patient.elements.SpecialNeeds}</td>
    //       </tr>
    //     </tbody>
    //   ))}
    // </table>
  );
};

export default Tables;
