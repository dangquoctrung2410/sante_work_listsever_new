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

const Memory = (_props: Props) => {
  return (
    <Row className={styleModule.memory}>
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
            <Area type="monotone" dataKey="uv" stroke="#c41d7f" fill="#fff0f6" />
          </AreaChart>
        </ResponsiveContainer>
      </Col>
      <Col span={15} className={styleModule.col}>
        <Row>
          <Space className={styleModule.largeTitle}>
            <span>Memory</span>
          </Space>
        </Row>
        <Row>
          <Space>
            <span className={styleModule.smallTitle}>12.8/15.9 GB</span>
            <span className={styleModule.smallTitle}>(80%)</span>
          </Space>
        </Row>
      </Col>
    </Row>
  )
}

export default Memory
