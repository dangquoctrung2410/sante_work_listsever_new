import { Col, Row, Skeleton, Space, Typography } from 'antd';
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts';
import { RootState, useAppSelector } from '../../../redux/store';
import styleModule from './style.module.scss';
const { Text } = Typography;

type Props = {};

const Disk = (_props: Props) => {
  const monitorData = useAppSelector((state: RootState) => state.monitor);
  const diskData = monitorData.find((item: any) => item.key === 'disk');

  if (!diskData) {
    return <Skeleton active={true} />;
  }
  return (
    <>
      {diskData.data.map((disk: any, idx: number) => {
        const data = [{ percent: disk.Percented }, { percent: disk.Percented }];
        return (
          <Row key={idx} className={styleModule.disk}>
            <Col span={9} className={styleModule.col}>
              <ResponsiveContainer
                width="100%"
                height="100%"
                className={styleModule.chart}
              >
                <AreaChart
                  data={data}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <Area
                    type="monotone"
                    dataKey="percent"
                    stroke="#389e0d"
                    fill="#f6ffed"
                  />
                  <YAxis hide={true} type="number" domain={[0, 100]} />
                </AreaChart>
              </ResponsiveContainer>
            </Col>
            <Col span={15} className={styleModule.col}>
              <Row>
                <Space>
                  <Text ellipsis={true} className={styleModule.largeTitle}>
                    Disk {++idx} ({disk.Mounted})
                  </Text>
                </Space>
              </Row>
              <Row>
                <Text ellipsis={true} className={styleModule.smallTitle}>
                  {(disk.Used / Math.pow(1024, 3)).toFixed(1)}/
                  {(disk.Blocks / Math.pow(1024, 3)).toFixed(1)}GB
                </Text>
              </Row>
              <Row>
                <Text ellipsis={true} className={styleModule.smallTitle}>
                  {disk.Capacity}
                </Text>
              </Row>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default Disk;
