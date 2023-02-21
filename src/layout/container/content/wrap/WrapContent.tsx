import CpuContent from '../cpu/CpuContent';
import styleModule from './style.module.scss';

type Props = {};

const WrapContent = (_props: Props) => {
  return (
    <div className={styleModule.wrapContent}>
      <CpuContent />
    </div>
  );
};

export default WrapContent;
