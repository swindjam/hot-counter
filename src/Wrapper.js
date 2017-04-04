import React from 'react';


export default class Wrapper extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    component: null
  }
  this.getComponent();
}

getComponent() {
  if(process.env.NODE_ENV === 'development') {
    const Component = require('./Component').default;

    this.setState({
      component
    })
  } else {
    require.ensure([], () => {
      const Component = require('./Component').default;

      this.setState({
        component
      })
    })
  }
}

render() {
  const {component} = this.state;

  return component
}

}
