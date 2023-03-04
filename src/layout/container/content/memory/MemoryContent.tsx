import { Col, Row, Skeleton, Space, theme, Typography } from 'antd';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import Translate from '../../../../components/base/translate/Translate';
import { RootState, useAppSelector } from '../../../../redux/store';
import styleModule from './style.module.scss';
const { useToken } = theme;

const { Title } = Typography;
type Props = {};

const MemoryContent = (_props: Props) => {
  const { token } = useToken();

  const monitorData = useAppSelector((state: RootState) => state.monitor);
  const memoryData = monitorData.find((item: any) => item.key === 'memory');

  if (!memoryData) {
    return <Skeleton active={true} />;
  }

  const renderCustomizedLabel = ({
    payload,
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white">
        {payload.name}: {`${(percent * 100).toFixed(0)}%`}( {payload.capacity}
        GB)
      </text>
    );
  };
  const dataMap = [
    {
      value: Math.round(
        (memoryData.data.freemem / memoryData.data.totalmem) * 100,
      ),
      color: token['green-5'],
      name: 'Free',
      capacity: (memoryData.data.freemem / Math.pow(1024, 3)).toFixed(1),
    },
    {
      value: Math.round(
        ((memoryData.data.totalmem - memoryData.data.freemem) /
          memoryData.data.totalmem) *
          100,
      ),
      color: token['red-5'],
      name: 'used',
      capacity: (
        (memoryData.data.totalmem - memoryData.data.freemem) /
        Math.pow(1024, 3)
      ).toFixed(1),
    },
  ];
  return (
    <div className={styleModule.memoryContent}>
      <div className={styleModule.memoryTitle}>
        <Space>
          <Title level={3}>Memory</Title>
        </Space>
        <Space style={{ float: 'right', fontSize: 15 }}>
          {/* <Text>{cpuData.data.model}</Text> */}
        </Space>
      </div>
      <div className={styleModule.memoryMain}>
        <div className={styleModule.logicalMemory}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataMap}
                dataKey="value"
                cx="50%"
                cy="50%"
                fill="#8884d8"
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {dataMap.map((item, idx) => {
                  return <Cell key={`cell-${idx}`} fill={item.color} />;
                })}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={styleModule.infoMemory}>
          <Row>
            <Col span={8}>
              <Title level={5}>
                <div>
                  <Translate contentKey="monitor.memory.free" />
                </div>
                <div>
                  {(memoryData.data.freemem / Math.pow(1024, 3)).toFixed(1)}GB
                </div>
              </Title>
            </Col>
            <Col span={8}>
              <Title level={5}>
                <div>
                  <Translate contentKey="monitor.memory.used" />
                </div>
                <div>
                  {(
                    (memoryData.data.totalmem - memoryData.data.freemem) /
                    Math.pow(1024, 3)
                  ).toFixed(1)}
                  GB
                </div>
              </Title>
            </Col>
            <Col span={8}>
              <Title level={5}>
                <div>
                  <Translate contentKey="monitor.memory.total" />
                </div>
                <div>
                  {(memoryData.data.totalmem / Math.pow(1024, 3)).toFixed(1)}GB
                </div>
              </Title>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MemoryContent;
