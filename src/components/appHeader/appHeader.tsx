import React, { Component } from 'react';
import { Icon, Breadcrumb, Tooltip } from 'antd';
import sty from './appHeader.scss';
import classNames from 'classnames';
import { IconFont } from '../../utils/util';

class AppHeader extends Component {
    onMenuType = () => {
        console.log('2')

    }
    render() {

        return (
            <div className={sty.header}>
                <div className={sty.control}>
                    <span className={sty.icon} onClick={this.onMenuType}>
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
                        <span className={sty.userName}>张三</span>
                    </span>
                    <span className={sty.icon}>
                        <IconFont type="icontubiao_gengduocaidan" style={{ fontSize: '14px', fontWeight: 300, transform: 'rotate(270deg)' }}></IconFont>
                    </span>


                </div>

            </div>
        )
    }
}

export default AppHeader;