import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: ""
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error) {
    // You can also log the error to an error reporting service
    this.setState({ hasError: true, error });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1> Something went wrong. </h1>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}
