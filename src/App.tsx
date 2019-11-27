import React, { Component } from 'react';
import RouterConfig from './router/index';
import {
    BrowserRouter as Router

} from 'react-router-dom';
import sty from './app.scss';
import LeftMenu from './components/menu/menu';
import MenuType from './components/menuType/menuType';
import AppHeader from './components/appHeader/appHeader';





class App extends Component {

    state = {
       
    }

    render() {
       

        return (
            <Router>
                <div className="app">

                    <div className={sty.left_menu}>
                        <div className={sty.logo}>
                            <img src="https://file.iviewui.com/admin-pro-dist/img/logo-dark.ab519d9f.png" alt=""></img>
                        </div>
                        <LeftMenu />
                    </div>

                    <div className={sty.right_content}>
                       
                        <AppHeader/>
                        <MenuType/>

                        <div className={sty.router_context}>
                            <RouterConfig />
                        </div>


                    </div>

                </div>
            </Router>
        );
    }
}

export default App;