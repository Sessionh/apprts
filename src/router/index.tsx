import asyncComponent from '../utils/asyncComponent';
import React, { Component } from 'react';
import Error404 from '../pages/error/error404';
import {
  Route,
  Switch
} from 'react-router-dom';

interface routesType {
  path: string,
  exact?: boolean,
  component: Function
}

let routes: Array<routesType> = [];


export default class RouteConfig extends Component {
  state = {
    routes: []
  }

  async componentDidMount() {
    routes = [
      {
        path: "/",
        exact: true,
        component: asyncComponent(() => import("../pages/home/home")),
    
      },
      {
        path: "/user",
        component: asyncComponent(() => import("../pages/user/user")),
    
      }
    
    ];

    await this.setState({routes});

  };

  render() {
    return (
      <Switch>

        {
          routes.map((route, index) => (

            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}

            />

          ))
        }

        <Route component={Error404}></Route>


      </Switch>


    )
  }
}

