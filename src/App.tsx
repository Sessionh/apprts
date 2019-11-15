import React, { Component } from 'react';
import RouterConfig from './router/index';
import {
    BrowserRouter as Router

} from 'react-router-dom';
import classNames from 'classnames';
import sty from './app.scss';
import LeftMenu from './components/menu/menu';
import { Icon, Breadcrumb, Tooltip, Tag } from 'antd';
import MyTag from './components/myTag/myTag';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1510260_9iai7eij1nm.js',
});


class App extends Component {

    // tag 关闭监听
    tagOnClose() {
        console.log(22)
       

    };

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

                                <span className={sty.userImg}>
                                    <img src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar" alt=""></img>
                                    <span className={sty.userName}>
                                        张三
                                    </span>
                                </span>
                                <span className={sty.icon}>
                                    <IconFont type="icontubiao_gengduocaidan" style={{ fontSize: '14px', fontWeight: 300, transform: 'rotate(270deg)' }}></IconFont>
                                </span>


                            </div>
                            <div className={sty.tabs}>
                                <span className={sty.icon}>
                                    <Icon type="left" style={{fontSize: '14px'}}/>
                                </span>

                                <div className={sty.content}>

                                    <div className={sty.tab_list}>
                                        {/* <Tag style={{fontSize: '14px'}}>首页</Tag>
                                        <Tag closable style={{fontSize: '14px'}}>控制台</Tag> */}
                                        <MyTag color="#ff" onClose={this.tagOnClose}>测试</MyTag>
                                        <MyTag color="#ff">测试1</MyTag>
                                        {/* <MyTag color="#ff">测试1</MyTag>
                                        <MyTag color="#ff">测试1</MyTag>
                                        <MyTag color="#ff">测试1</MyTag>
                                        <MyTag color="#ff">测试1临水临电临水临电乐山电力</MyTag>
                                        <MyTag color="#ff">测试1</MyTag>
                                        <MyTag color="#ff">测试1临水临电乐山电力死</MyTag><MyTag color="#ff">测试1</MyTag>
                                        <MyTag color="#ff">测试1</MyTag>
                                        <MyTag color="#ff">测试1</MyTag>
                                        <MyTag color="#ff">测试1累死了多少了多少了</MyTag>

                                        <MyTag color="#ff">测试1</MyTag> */}


                                    </div>


                                </div>

                                <div className={sty.icon}>
                                    <Icon type="right" style={{ fontSize: '14px' }} />
                                </div>

                                <div className={sty.tag_action}>
                                    <Icon type="down" style={{ fontSize: '14px' }} />
                                </div>

                                

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