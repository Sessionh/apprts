import React,{Component} from 'react';
import {Icon} from 'antd';
import sty from './myTag.scss';

export interface myTagProps {
    onClose?:  React.MouseEventHandler<HTMLElement>,
    color?: string,

}

class MyTag extends Component<myTagProps> {
    // constructor(props: myTagProps) {
    //     super(props);

    // }
  
    

    render() {
        const {children, onClose} = this.props;
        return (
            <div className={sty.my_tag}>
                <div className={sty.content}>
                    <span className={sty.tagName}>{children}</span>
                    <div className={sty.icon_text} onClick={onClose}>
                        <Icon type="close" className={sty.icon}  />
                    </div>

                </div>
              
                
            </div>
        )
    }
}
export default MyTag;