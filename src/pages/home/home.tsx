import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveImg } from '../../store/home/action';
import Button from 'antd/es/button';
import style from './home.scss';
import classNames from 'classnames';
import {throttle1, formatDate} from '../../utils/util'



interface actionInt {
    orderSum?: string;
    name?: string;
    phoneNo?: string;
    imgpath?: string;
}

interface appState {
    saveImg: Function;
    formData: actionInt;
}




class Home extends Component<appState, object> {

    constructor(props: appState) {
        super(props);
        console.log(this.props)


    };

    state = {
        name: 'hello world'
    };

    onBut = () => {
        new throttle1(() => {
            console.log(22)
        }, 1000, 2000)
        this.props.saveImg('http://')
        const time = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
        
        console.log(time)
    
    };
 
    test = () => {
       
        console.log(22)

    }

   

    render() {

        const { formData } = this.props;

        return (
            <div className={style.my_home}>
                <div className={classNames(style.text, 'text')}>hello ts</div>
                <Button type="primary" size="small" className={style.myButton} onClick={this.onBut} >按钮</Button>
                <div className={style.greeting}>
                    {this.state.name}  {formData.imgpath}
                </div>
            </div>
        );
    }
}

export default connect((state: any) => ({
    formData: state.formData
}), {
    saveImg
})(Home);

