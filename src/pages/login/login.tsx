import React, {Component} from 'react';
import { connect } from "react-redux";
import { saveImg } from '../../store/home/action';

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
class Login extends Component<appState> {
    constructor(props: appState) {
        super(props)
    }
    render() {
        return (
            <div>login</div>
        )
    }
}

export default connect((state: any) => {
   

}, {saveImg})(Login);