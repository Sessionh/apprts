import React, { Component } from 'react';
import MyTag from '../myTag/myTag';
import { Icon } from 'antd';
import sty from './menuType.scss';
import { IconFont } from '../../utils/util';
import classNames from 'classnames';

class menuType extends Component {
    private textInput = React.createRef<HTMLDivElement>();
    private tagParent = React.createRef<HTMLDivElement>();

    state = {
        tagX: 0,
        tagIndex: 1,
        tagList: [
            {
                id: 1,
                name: 'home',
                text: '主控台',
                isClose: true
            },
            {
                id: 2,
                name: 'watch',
                text: '监控台',
                isClose: true
            },
            {
                id: 3,
                name: 'workspace',
                text: '工作台',
                isClose: true
            }


        ],
        isMenuHover: false
    };

    // tag 关闭监听
    tagOnClose = (item?: any) => {

        console.log(item)
        let { tagList } = this.state;
        tagList = tagList.filter((ret) => ret.id !== item.id);
        this.setState({
            tagList
        })


    };

    tagSelect = (item?: any) => {

        if (item && item.id) {
            this.setState({
                tagIndex: item.id
            })
        }

    };

    menuMouseEnter = (e: any) => {

        this.setState({
            isMenuHover: true
        })

    };

    menuMouseLeave = () => {

        this.setState({
            isMenuHover: false
        })
    };

    handleWheel = (e: any) => {


        const eventDelta = e.nativeEvent.wheelDelta || -e.nativeEvent.deltaY * 40;
        const width = this.textInput.current!.offsetWidth;
        const parentWidth = this.tagParent.current!.offsetWidth;

        let tagX = this.state.tagX;
        let gapWidth = width - parentWidth > 0 ? width - parentWidth : 0;
        if (eventDelta > 0) { // 向左移动

            if (gapWidth < Math.abs(tagX - 100)) {
                tagX = -gapWidth
            } else {
                tagX = tagX - 100;
            }

        } else if (eventDelta < 0 && tagX < 0) { // 向右移动

            if (gapWidth < Math.abs(tagX + 100)) {
                tagX = gapWidth
            } else {
                tagX = tagX + 100;
            }
            if (tagX < 0 && tagX > -100) {
                tagX = 0
            }


        }

        this.setState({ tagX })
    };


    render() {
        const { tagList, tagIndex, tagX, isMenuHover } = this.state;
        return (
            <div className={sty.tabs} >
                <span className={sty.icon}>
                    <Icon type="left" style={{ fontSize: '14px' }} />
                </span>

                <div ref={this.tagParent} className={sty.content} onWheel={this.handleWheel}>

                    <div ref={this.textInput} className={sty.tab_list} style={{ transform: `translateX(${tagX}px)` }}>
                        {
                            tagList.map((item) => (
                                <MyTag
                                    key={item.id}
                                    color={tagIndex === item.id ? '#1890ff' : ''}
                                    item={item}
                                    onClose={item.isClose ? this.tagOnClose : undefined}
                                    onSelect={this.tagSelect}>
                                    {item.text}
                                </MyTag>
                            ))
                        }

                    </div>


                </div>

                <div className={sty.icon}>
                    <Icon type="right" style={{ fontSize: '14px' }} />
                </div>

                <div onMouseEnter={this.menuMouseEnter} onMouseLeave={this.menuMouseLeave}>

                    <div className={sty.tag_action}>
                        <Icon type="down" style={{ fontSize: '14px' }} />
                        <div className={sty.tag_line}></div>
                    </div>


                    <div className={sty.tag_menu}>
                        <div className={isMenuHover ? classNames(sty.tag_ul_hover, sty.tag_ul) : sty.tag_ul}>
                            <div className={sty.tag_content}>
                                <IconFont type="iconzuojiantou" style={{ fontSize: '14px' }} />
                                <span className={sty.name}>关闭左边</span>
                            </div>
                            <div className={sty.tag_content}>
                                <IconFont type="iconyoujiantou" style={{ fontSize: '14px' }} />
                                <span className={sty.name}>关闭右边</span>
                            </div>
                            <div className={sty.tag_content}>
                                <IconFont type="iconguanbi1" style={{ fontSize: '14px' }} />
                                <span className={sty.name}>关闭其他</span>
                            </div>
                            <div className={sty.tag_content}>
                                <IconFont type="iconguanbi" style={{ fontSize: '12px', padding: '0 2px' }} />
                                <span className={sty.name}>关闭所有</span>
                            </div>

                        </div>



                    </div>

                </div>

            </div>

        )
    }
}

export default menuType;