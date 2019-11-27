import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveIsMenuClose } from '../../store/home/action';
import style from './user.scss';



interface actionInt {
    orderSum?: string;
    name?: string;
    phoneNo?: string;
    imgpath?: string;
}

interface appState {
    saveIsMenuClose: Function;
    formData: actionInt;
}


class User extends Component<appState, object> {

    constructor(props: appState) {
        super(props);
        console.log(this.props)


    };

    state = {
        name: 'hello world'
    };

    onBut = () => {
        this.props.saveIsMenuClose(false);

    };
    
    render() {

        const {formData} = this.props;
       
        return (
            <div className="user">
                <div className={style.text}>hello {formData.imgpath}</div>               
            </div>
        );
    }
}

export default connect((state: any) => ({
    formData: state.formData
}), {
    saveIsMenuClose
})(User);

