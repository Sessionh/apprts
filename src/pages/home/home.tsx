import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveIsMenuClose } from '../../store/home/action';
import Button from 'antd/es/button';
import style from './home.scss';
import classNames from 'classnames';
import { throttle1, formatDate } from '../../utils/util';

import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

// 数据源
const data = [
    { genre: 'Sports', sold: 275, income: 2300 },
    { genre: 'Strategy', sold: 115, income: 667 },
    { genre: 'Action', sold: 120, income: 982 },
    { genre: 'Shooter', sold: 350, income: 5271 },
    { genre: 'Other', sold: 150, income: 3710 }
  ];
  
  // 定义度量
  const cols = {
    sold: { alias: '销售量' },
    genre: { alias: '游戏种类' }
  };

export interface stateType {
    isMenuClose: boolean;
    menus: Array<object>
}

interface appState {
    saveIsMenuClose: (value: boolean) => void;
    formData: stateType;
}




class Home extends Component<appState, object> {

    constructor(props: appState) {
        super(props);
        console.log(this.props)


    };

    state = {
        name: 'hello world',
        serverData: [
            {
              Data: '2009/6/12 1:00',
              value: 0.1
            },
            {
              Data: '2009/6/12 2:00',
              value: 2
            },
            {
              Data: '2009/6/12 3:00',
              value: 1
            },
            {
              Data: '2009/6/12 4:00',
              value: 3
            },
            {
              Data: '2009/6/12 5:00',
              value: 1.7
            },
            {
              Data: '2009/6/12 6:00',
              value: 2.1
            },
            {
              Data: '2009/6/12 7:00',
              value: 3.7
            },
            {
              Data: '2009/6/12 9:00',
              value: 1.7
            }
          ],
    };

    onBut = async () => {
        new throttle1(() => {
            console.log(22)
        }, 1000, 2000)
        await this.props.saveIsMenuClose(true);
        console.log(this.props.formData)
        const time = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')

        console.log(time)

    };

    test = () => {

        console.log(22)

    }



    render() {

        const { formData } = this.props;
        const { serverData } = this.state;

        return (
            <div className={style.my_home} >
                <Chart width={600} height={400} data={data} scale={cols}>
                    <Axis name="genre" title/>
                    <Axis name="sold" title/>
                    <Legend position="top"  />
                    <Tooltip />
                    <Geom type="interval" position="genre*sold" color="genre" />
                </Chart>
                <div className={classNames(style.text, 'text')}>hello ts</div>
                <Button type="primary" size="small" className={style.myButton} onClick={this.onBut} >按钮</Button>
                <div className={style.greeting}>
                    {this.state.name}  {formData.isMenuClose ? '1' : '0'}
                </div>
            </div>
        );
    }
}

export default connect((state: any) => ({
    formData: state.formData
}), {
    saveIsMenuClose
})(Home);

