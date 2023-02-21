import { Col, Row, Skeleton, Space, Typography } from 'antd';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
} from 'recharts';
import Translate from '../../../../components/base/translate/Translate';
import { RootState, useAppSelector } from '../../../../redux/store';
import { convertMsToTime } from '../../../../utils/convertMstoTime';
import { middlePatriot } from '../../../../utils/middlePatriot';
import styleModule from './style.module.scss';
const { Title, Text } = Typography;
type Props = {};

const CpuContent = (_props: Props) => {
  const monitorData = useAppSelector((state: RootState) => state.monitor);
  const cpuData = monitorData.find((item: any) => item.key === 'cpu');
  const uptimeData = monitorData.find((item: any) => item.key === 'uptime');

  if (!cpuData) {
    return <Skeleton active={true} />;
  }
  const numCpu = cpuData.data.cpusLogicUsed.length;
  const middle = middlePatriot(numCpu);
  const col = middle;
  const row = numCpu / middle;
  return (
    <div className={styleModule.cpuContent}>
      <div className={styleModule.cpuTitle}>
        <Space>
          <Title level={3}>CPU</Title>
        </Space>
        <Space style={{ float: 'right', fontSize: 15 }}>
          <Text>{cpuData.data.model}</Text>
        </Space>
      </div>
      <div className={styleModule.cpuMain}>
        <div className={styleModule.logicalCpu}>
          {cpuData.data.cpusLogicUsed.map((cpu: any, idx: any) => {
            const idle = cpu.times.idle;
            const total =
              cpu.times.idle +
              cpu.times.irq +
              cpu.times.nice +
              cpu.times.sys +
              cpu.times.user;

            return (
              <div
                className={styleModule.cpuLogicWrap}
                style={{
                  width: `calc(100% / ${col})`,
                  height: `calc(100% / ${row})`,
                }}
                key={idx}
              >
                <div className={styleModule.cpuLogic}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={[
                        { percent: Math.round(((total - idle) / total) * 100) },
                        { percent: Math.round(((total - idle) / total) * 100) },
                      ]}
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
                        stroke="#0958d9"
                        fill="#e6f4ff"
                      />
                      <CartesianGrid strokeDasharray="3 3" />
                      <YAxis hide={true} type="number" domain={[0, 100]} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styleModule.infoCpu}>
          <Row>
            <Col span={8}>
              <Title level={5}>
                <div>
                  <Translate contentKey="monitor.cpu.utilisation" />
                </div>
                <div>{cpuData.data.avgCPUsLogicUsed || 0}%</div>
              </Title>
            </Col>
            <Col span={8}>
              <Title level={5}>
                <div>
                  <Translate contentKey="monitor.cpu.speed" />
                </div>
                <div>{cpuData.data.speed / 1000}GHZ</div>
              </Title>
            </Col>
            <Col span={8}>
              <Title level={5}>
                <div>
                  <Translate contentKey="monitor.cpu.upTime" />
                </div>
                {uptimeData && uptimeData.data && (
                  <div>{convertMsToTime(uptimeData.data)}</div>
                )}
              </Title>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CpuContent;
