import React, { Component } from 'react';
import RouterConfig from './router/index';
import {
    BrowserRouter as Router
    
} from 'react-router-dom';
import classNames from 'classnames';
import sty from './app.scss';
import LeftMenu from './components/menu/menu';
import { Icon, Breadcrumb, Tooltip } from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1510260_21n5who1zh1.js',
  });


class App extends Component {

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
                        <div className={sty.header}>
                            <div className={sty.control}>
                                <span className={sty.icon}>
                                    <Icon type="menu-fold" style={{ fontSize: '16px' }} />
                                </span>

                                <span className={classNames(sty.icon)}>
                                    <IconFont type="iconshuaxin" style={{ fontSize: '16px' }} />
                                </span>

                                <span className={sty.breadcrumb}>
                                    <Breadcrumb>
                                        <Breadcrumb.Item href="">
                                            首页
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item href="">
                                          
                                            <span>Application List</span>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item>Application</Breadcrumb.Item>
                                    </Breadcrumb>
                                </span>

                                <span className={sty.search_input}>
                                    <input placeholder="搜索..." />
                                </span>

                                <span className={sty.icon}>
                                    <Tooltip placement="bottom" title="没有日志或新的消息">
                                        <IconFont type="iconrecord_on" style={{ fontSize: '22px' }} />
                                    </Tooltip>
                                </span>

                                <span className={sty.icon}>
                                    <IconFont type="iconquanping" style={{ fontSize: '18px' }}></IconFont>
                                </span>

                                <span className={sty.icon}>
                                    <IconFont type="iconicon--" style={{ fontSize: '22px' }}></IconFont>
                                </span>

                            </div>
                            <div className={sty.tabs}>
                                44
                            </div>

                        </div>

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