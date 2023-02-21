import { theme } from 'antd';

const { useToken } = theme;

type Props = {
  tabs: Array<any>;
  onTabChange(key: string): void;
};

const SiderLeft = (props: Props) => {
  const { token } = useToken();
  return (
    <>
      {props.tabs.map((tab) => {
        return (
          <div
            onClick={() => props.onTabChange(tab.key)}
            key={tab.key}
            style={{
              padding: 5,
              background: tab.active ? token.colorPrimaryBg : undefined,
              pointerEvents: !tab.disable ? 'all' : 'none',
              cursor: !tab.disable ? 'pointer' : 'none',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            {tab.label}
          </div>
        );
      })}
    </>
  );
};

export default SiderLeft;
