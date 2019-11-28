import React, { Component } from 'react';
import RouterConfig from './router/index';
import { connect } from "react-redux";
import {
    BrowserRouter as Router

} from 'react-router-dom';
import classnames from 'classnames';
import sty from './app.scss';
import LeftMenu from './components/menu/menu';
import MenuType from './components/menuType/menuType';
import AppHeader from './components/appHeader/appHeader';
import {saveIsMenuClose, stateFormData} from './store/home/action'





class App extends Component<stateFormData> {

    state = {
       
    }

    render() {
        const {formData} = this.props
       

        return (
            <Router>
                <div className="app">

                    <div className={formData.isMenuClose? classnames(sty.left_menu, sty.left_menu_hide) : sty.left_menu}>
                        <div className={sty.logo}>
                            <img src= {
                                 formData.isMenuClose? 
                                  "https://file.iviewui.com/admin-pro-dist/img/logo-small.4a34a883.png" :
                                  "https://file.iviewui.com/admin-pro-dist/img/logo-dark.ab519d9f.png"
                                  } alt=""></img>
                           
                        </div>
                        {formData.isMenuClose? null :  <LeftMenu />}
                       
                    </div>

                    <div className={formData.isMenuClose? classnames(sty.right_content, sty.right_content_hideMenu) :  sty.right_content }>
                       
                        <AppHeader/>
                        <MenuType/>

                        <div className={sty.router_context}>
                           {formData.isMenuClose? '33' : '44'}
                            <RouterConfig />
                        </div>


                    </div>

                </div>
            </Router>
        );
    }
}

export default connect((state: any) => ({
    formData: state.formData
}), {
    saveIsMenuClose
})(App);



// export default App;