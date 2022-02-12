import { Component } from "react";

class ErrorBoundary extends Component<unknown, { hasError: boolean }> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
