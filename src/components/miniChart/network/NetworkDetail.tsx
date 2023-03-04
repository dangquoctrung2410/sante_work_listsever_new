import { Card, Row, Typography } from 'antd';
const { Text } = Typography;
type Props = {
  data: any;
};

const NetworkDetail = (props: Props) => {
  const data = Object.entries(props.data);
  return (
    <Card style={{ width: '100%' }}>
      {data.map((item, idx) => {
        return (
          <Row key={idx}>
            <Text>
              <>
                {item[0]}:{item[1]}
              </>
            </Text>
          </Row>
        );
      })}
    </Card>
  );
};

export default NetworkDetail;
