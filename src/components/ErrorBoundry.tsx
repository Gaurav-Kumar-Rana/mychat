import React, { Component, ReactNode, ErrorInfo } from "react";

interface ErrorBoundryProps {
  children: ReactNode;
}

interface ErrorBoundryState {
  hasError: boolean;
}

class ErrorBoundry extends Component<ErrorBoundryProps, ErrorBoundryState> {
  state: ErrorBoundryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundry:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops, something went wrong</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;