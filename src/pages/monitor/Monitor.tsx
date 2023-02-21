import { useEffect } from 'react';
import WrapContent from '../../layout/container/content/wrap/WrapContent';
import SiderLeft from '../../layout/container/siderLeft/SiderLeft';
import { getPerformance } from '../../reducers/slice/monitorSlice';
import { useAppDispatch } from '../../redux/store';
import styleModule from './style.module.scss';
type Props = {};

let interval: NodeJS.Timeout | null | undefined = null;
const Monitor = (_props: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPerformance());

    interval && clearInterval(interval);
    interval = setInterval(() => {
      dispatch(getPerformance());
    }, 5000);
  }, []);

  return (
    <div className={styleModule.monitor}>
      <div className={styleModule.container}>
        <div className={styleModule.siderLeft}>
          <SiderLeft />
        </div>
        <div className={styleModule.main}>
          <WrapContent />
        </div>
      </div>
    </div>
  );
};

export default Monitor;
