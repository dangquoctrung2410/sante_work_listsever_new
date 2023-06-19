import { COLUMNS } from './Columns';
import { useEffect, useMemo } from 'react';
import styles from './Styles.module.scss';
// import data from '../../mocks/response.json';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { IWorklistItem } from '../../models/reducers/worklist.model';
import { getWorklist } from '../../reducers/slice/worklistSlice';

type Props = {};

const Table = (_props: Props) => {
  // const cloneDta: Array<any> = data.data;
  const dispatch = useAppDispatch();
  const worklistData: Array<IWorklistItem> = useAppSelector(
    (state) => state.worklist,
  );

  useEffect(() => {
    dispatch(getWorklist());
  }, []);

  console.log('worklistData', worklistData);
  const columns = useMemo(() => COLUMNS, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          {columns.map((column) => (
            <th className={styles.th} key={column.key}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>

      {worklistData.map((patient, index: number) => (
        <tbody key={index}>
          <tr className={styles.tr}>
            <td className={styles.td}>{index + 1}</td>
            <td className={styles.td}>{patient.elements.PatientName}</td>
            <td className={styles.td}>{patient.elements.PatientID}</td>
            <td className={styles.td}>{patient.elements.PatientBirthDate}</td>
            <td className={styles.td}>{patient.elements.PatientSex}</td>
            <td className={styles.td}>{patient.elements.AccessionNumber}</td>
            <td className={styles.td}>
              {patient.elements.RequestingPhysician}
            </td>
            <td className={styles.td}>
              {patient.elements.RequestedProcedureDescription}
            </td>
            <td className={styles.td}>{patient.elements.Modality}</td>
            <td className={styles.td}>{patient.elements.StudyDate}</td>
            <td className={styles.td}>{patient.elements.StudyTime}</td>
            <td className={styles.td}>{patient.elements.PatientName}</td>
            <td className={styles.td}>{patient.elements.PatientName}</td>
            <td className={styles.td}>
              {patient.elements.ReferringPhysicianName}
            </td>
            <td className={styles.td}></td>
            <td className={styles.td}>{patient.elements.SpecialNeeds}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Table;
