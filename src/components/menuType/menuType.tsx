import React, { Component } from 'react';
import MyTag from '../myTag/myTag';
import { Icon } from 'antd';
import sty from './menuType.scss';
import { IconFont } from '../../utils/util';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { stateFormData, saveTagMenus, saveIsCheckedMenu } from '../../store/home/action';

class menuType extends Component<stateFormData> {
    private textInput = React.createRef<HTMLDivElement>();
    private tagParent = React.createRef<HTMLDivElement>();


    state = {
        tagX: 0,
        isMenuHover: false
    };

    // tag 关闭监听
    tagOnClose = (item?: any) => {

        let { formData, saveTagMenus, saveIsCheckedMenu } = this.props;
        let tagMenus = formData.tagMenus;
        let tagIndex = -1;
        tagMenus.forEach((ret, index) => {
            if (ret.name === item.name) {
                tagIndex = index
            }

        })

        if (tagIndex >= 0 && tagMenus.length > 1) {
            let result = tagMenus[tagIndex - 1];
            if (result && result.name) {
                saveIsCheckedMenu(result.name);
            } else {

                let tagNext = tagMenus[tagIndex + 1];
                if (tagNext && tagNext.name) {
                    saveIsCheckedMenu(tagNext.name);
                }

            }
        } else {
            saveIsCheckedMenu('');
        }


        tagMenus = tagMenus.filter((ret) => ret.name !== item.name);
        saveTagMenus(tagMenus)



    };

    tagSelect = (item: any) => {
        const { formData, saveIsCheckedMenu } = this.props;

        if (item.name && formData.isCheckedMenu !== item.name) {
            saveIsCheckedMenu(item.name)
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

    tagMenuAction(type: number) {
        // 1 关闭左边  2 关闭右边 3 关闭其他 4 全部关闭

        const { formData, saveTagMenus } = this.props;
        const { tagMenus, isCheckedMenu } = formData;
        console.log(tagMenus)
        let tagIndex = 0;

        tagMenus.forEach((ret, index) => {
            if (ret.name === isCheckedMenu) {
                tagIndex = index
            }

        })

        switch (type) {
            case 1:
                let result = tagMenus.filter((item, index) => index >= tagIndex);
                saveTagMenus(result)
                break;
            case 2:
                let result1 = tagMenus.filter((item, index) => index <= tagIndex);
                saveTagMenus(result1)
                break;
            case 3:
                let result2 = tagMenus.filter((item, index) => index === tagIndex);
                saveTagMenus(result2)
                break;
            case 4:
                saveTagMenus([])
                break;
        }

    }


    render() {
        const { tagX, isMenuHover } = this.state;
        const { formData } = this.props;
        const { tagMenus, isCheckedMenu } = formData;
        return (
            <div  className={sty.tabs} >
                <span className={sty.icon}>
                    <Icon type="left" style={{ fontSize: '14px' }} />
                </span>

                <div ref={this.tagParent} className={sty.content} onWheel={this.handleWheel}>

                    <div ref={this.textInput} className={sty.tab_list} style={{ transform: `translateX(${tagX}px)` }}>
                        {
                            tagMenus.map((item) => (
                                <MyTag
                                    key={item.name}
                                    color={isCheckedMenu === item.name ? '#1890ff' : ''}
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
                            <div className={sty.tag_content} onClick={() => this.tagMenuAction(1)}>
                                <IconFont type="iconzuojiantou" style={{ fontSize: '14px' }} />
                                <span className={sty.name}>关闭左边</span>
                            </div>
                            <div className={sty.tag_content} onClick={() => this.tagMenuAction(2)}>
                                <IconFont type="iconyoujiantou" style={{ fontSize: '14px' }} />
                                <span className={sty.name}>关闭右边</span>
                            </div>
                            <div className={sty.tag_content} onClick={() => this.tagMenuAction(3)}>
                                <IconFont type="iconguanbi1" style={{ fontSize: '14px' }} />
                                <span className={sty.name}>关闭其他</span>
                            </div>
                            <div className={sty.tag_content} onClick={() => this.tagMenuAction(4)}>
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


export default connect((state: any) => ({
    formData: state.formData
}), {
    saveTagMenus,
    saveIsCheckedMenu

})(menuType);

// export default menuType;