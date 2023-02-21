import Cpu from '../../../components/miniChart/cpu/Cpu';
import Disk from '../../../components/miniChart/disk/Disk';
import Memory from '../../../components/miniChart/memory/Memory';
import Network from '../../../components/miniChart/network/Network';

type Props = {};

const SiderLeft = (_props: Props) => {
  return (
    <>
      <Cpu />
      <Memory />
      <Disk />
      <Network />
    </>
  );
};

export default SiderLeft;
