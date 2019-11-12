import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveImg } from '../../store/home/action';
import Button from 'antd/es/button';
import style from './home.scss';
import classNames from 'classnames';



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
        this.props.saveImg('http://');

    };
    
    render() {

        const {formData} = this.props;
        const demosy = classNames(style.text, 'text');
       
        return (
            <div className="hello">
                <div className={demosy}>hello ts</div>
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

