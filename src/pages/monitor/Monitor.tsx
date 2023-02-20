import { useEffect } from 'react'
import Cpu from '../../components/miniChart/cpu/Cpu'
import Disk from '../../components/miniChart/disk/Disk'
import Memory from '../../components/miniChart/memory/Memory'
import Network from '../../components/miniChart/network/Network'
import { getPerformance } from '../../reducers/slice/monitorSlice'
import { useAppDispatch } from '../../redux/store'
import styleModule from './style.module.scss'
type Props = {}

const Monitor = (_props: Props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getPerformance())
  }, [])

  return (
    <div className={styleModule.monitor}>
      <div className={styleModule.container}>
        <div className={styleModule.siderLeft}>
          <Cpu />
          <Memory />
          <Disk />
          <Disk />
          <Disk />
          <Network />
          <Network />
          <Network />
          <Network />
        </div>
        <div className={styleModule.main}>Content</div>
      </div>
    </div>
  )
}

export default Monitor
