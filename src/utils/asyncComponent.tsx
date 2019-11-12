import React, { Component } from "react";

export default function asyncComponent(importComponent: Function) {
  class AsyncComponent extends Component {
    constructor(props: any) {
      super(props);

      this.state = {
        component: null
      };
    }
    state = {
        component: null
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({component});
    }

    render() {

      const C:any = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}