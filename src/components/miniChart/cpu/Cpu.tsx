import { Col, Row, Space } from 'antd'
import { ResponsiveContainer, Area, AreaChart } from 'recharts'
import { RootState, useAppSelector } from '../../../redux/store'
import styleModule from './style.module.scss'
type Props = {}

const data = [
  {
    uv: 4000,
  },
  {
    uv: 3000,
  },
  {
    uv: 2000,
  },
  {
    uv: 2780,
  },
  {
    uv: 1890,
  },
  {
    uv: 2390,
  },
  {
    uv: 3490,
  },
]
const Cpu = (_props: Props) => {
  const monitorData = useAppSelector((state: RootState) => state.monitor)
  console.log(monitorData)
  const cpuData = monitorData.find((item: any) => item.key === 'cpu')
  console.log(cpuData)
  return (
    <Row className={styleModule.cpu}>
      <Col span={9} className={styleModule.col}>
        <ResponsiveContainer width="100%" height="100%" className={styleModule.chart}>
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Area type="monotone" dataKey="uv" stroke="#0958d9" fill="#e6f4ff" />
          </AreaChart>
        </ResponsiveContainer>
      </Col>
      <Col span={15} className={styleModule.col}>
        <Row>
          <Space className={styleModule.largeTitle}>
            <span>CPU</span>
          </Space>
        </Row>
        <Row>
          <Space className={styleModule.smallTitle}>
            <span style={{ fontSize: 13 }}>18%</span>
            <span style={{ fontSize: 13 }}>2.28GHz</span>
          </Space>
        </Row>
      </Col>
    </Row>
  )
}

export default Cpu
