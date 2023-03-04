import { Typography } from 'antd';
import { Component } from 'react';
const { Title, Text } = Typography;
type Props = {
  children?: any;
};

type State = {
  error: any;
  errorInfo: any;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }
  render() {
    const { error, errorInfo } = this.state;
    if (errorInfo) {
      const errorDetails = (
        <details open={true} className="preserve-space">
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </details>
      );
      return (
        <>
          <Title level={3}>An unexpected error has occurred.</Title>
          <Text>{errorDetails}</Text>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
