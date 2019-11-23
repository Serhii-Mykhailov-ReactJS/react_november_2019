// Core
import React, { Component } from 'react'
// Styles
import './ErrorBoundaryStyles.css';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service

    // logErrorToMyService(error, info);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <h1 className="error-text">
          Something went wrong.
        </h1>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
