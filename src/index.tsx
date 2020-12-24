import React from 'react';

class ReactDASH extends React.Component {
  constructor(props: any) {
    super(props);
    console.log('made it to constructor')
  }

  componentDidMount() {
    console.log('CDM')
  }

  render() {
    return (
      <div>This will be a component soon.</div>
    )
  }
}

export default ReactDASH;