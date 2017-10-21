import React from 'react';

const Example = Component =>
  class extends React.Component {
    state = {};

    componentDidMount() {}

    render() {
      return <Component {...this.props} />;
    }
  };

export default Example;
