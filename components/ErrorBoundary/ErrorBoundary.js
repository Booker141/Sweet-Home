import { Component } from 'react';
import { Error } from 'next/error';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error tracking service here
    console.error('Client-side error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render the error page
      return <Error statusCode={500} title="An error occurred" />;
    }

    // Render the children components
    return this.props.children;
  }
}

export default ErrorBoundary;
