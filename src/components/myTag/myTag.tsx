import React, { Component } from 'react';
import { Icon } from 'antd';
import sty from './myTag.scss';

export interface myTagProps {
    onClose?: (item?: any) => void,
    onSelect?: (item?: any, e?: React.MouseEvent<HTMLElement>) => void,
    color?: string,
    item?: any


}

class MyTag extends Component<myTagProps> {

    private textInput = React.createRef<HTMLDivElement>();
    // constructor(props: myTagProps) {
    //     super(props);

    // }



    /**
     * @description: 选中标签事件
     * @param {type} dom
     * @return: void
     */
    parentClick = (e?: React.MouseEvent<HTMLElement>) => {
        const { onSelect, item } = this.props;
        if (onSelect) {
            // console.log(this.textInput.current!.offsetLeft)
           
            onSelect(item, e);
        }

    }

    /**
     * @description: 关闭标签事件
     * @param {type} dom
     * @return: void
     */
    myOnClose = (e: React.MouseEvent<HTMLElement>) => {
        const { onClose, item } = this.props;
        if (onClose) {
            onClose(item);
        }

        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

    }



    render() {
        const { children, onClose, color} = this.props;
        return (
            <div ref={this.textInput} className={sty.my_tag} onClick={this.parentClick}>
                <div className={sty.content}>
                    <span className={sty.tagName} style={{ color: color ? color : '' }}>{children}</span>
                    {
                        onClose ? <div className={sty.icon_text} onClick={this.myOnClose}>
                            <Icon type="close" className={sty.icon} />
                        </div> : null
                    }


                </div>


            </div>
        )
    }
}
export default MyTag;