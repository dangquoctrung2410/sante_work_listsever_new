import { Col, Row, Space } from 'antd'
import { ResponsiveContainer, Area, AreaChart } from 'recharts'
import styleModule from './style.module.scss'

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
type Props = {}

const Disk = (_props: Props) => {
  return (
    <Row className={styleModule.disk}>
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
            <Area type="monotone" dataKey="uv" stroke="#389e0d" fill="#f6ffed" />
          </AreaChart>
        </ResponsiveContainer>
      </Col>
      <Col span={15} className={styleModule.col}>
        <Row>
          <Space className={styleModule.largeTitle}>
            <span>Disk 0 (C:)</span>
          </Space>
        </Row>
        <Row>
          <Space className={styleModule.smallTitle}>
            <span>SSD</span>
          </Space>
        </Row>
        <Row>
          <Space className={styleModule.smallTitle}>
            <span>80%</span>
          </Space>
        </Row>
      </Col>
    </Row>
  )
}

export default Disk
