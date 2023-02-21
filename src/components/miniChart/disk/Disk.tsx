import { Col, Row, Space, Spin } from 'antd';
import { ResponsiveContainer, Area, AreaChart } from 'recharts';
import { RootState, useAppSelector } from '../../../redux/store';
import { useEffect, useState } from 'react';
import styleModule from './style.module.scss';

type Props = {};

const Disk = (_props: Props) => {
  const [data, setData] = useState<Array<any>>([]);
  const monitorData = useAppSelector((state: RootState) => state.monitor);
  const diskData = monitorData.find((item: any) => item.key === 'disk');
  useEffect(() => {
    if (diskData) {
      console.log(diskData);
      const dataTemp = [...data, { percent: diskData.data.avgCPUsLogicUsed }];
      if (dataTemp.length > 10) {
        dataTemp.pop();
      }
      diskData && setData(dataTemp);
    }
  }, [diskData]);

  if (!diskData) {
    return (
      <Row className={styleModule.disk}>
        <Spin />
      </Row>
    );
  }
  return (
    <>
      {diskData.data.map((disk: any, idx: number) => {
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
                    dataKey="uv"
                    stroke="#389e0d"
                    fill="#f6ffed"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Col>
            <Col span={15} className={styleModule.col}>
              <Row>
                <Space className={styleModule.largeTitle}>
                  <span>
                    Disk {++idx} ({disk.Mounted})
                  </span>
                </Space>
              </Row>
              <Row>
                <Space className={styleModule.smallTitle}>
                  <span>SSD</span>
                </Space>
              </Row>
              <Row>
                <Space className={styleModule.smallTitle}>
                  <span>{disk.Capacity}</span>
                </Space>
              </Row>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default Disk;
