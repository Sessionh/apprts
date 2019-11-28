import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import { stateFormData } from '../../store/home/action'
const { SubMenu } = Menu;



let menus = [
    {
        id: 1,
        text: '首页',
        icon: 'appstore',
        children: [
            {
                id: 1,
                path: '/sub1',
                name: 'sub1',
                text: '测试'

            },
            {
                id: 2,
                path: '/sub2',
                name: 'subN2',
                text: '中途'

            },
            {
                id: 3,
                path: '/sub3',
                name: 'sub3',
                text: 'sub3',
                children: [
                    {
                        id: 1,
                        path: '/subName1',
                        name: 'subName1',
                        text: '子菜单1'
        
                    },
                    {
                        id: 2,
                        path: '/subName2',
                        name: 'subName2',
                        text: '子菜单2'
        
                    },
                   
                ]

            }
        ]


    }
]

/**
 * @description: 左侧菜单栏
 * @param {type} 
 * @return: 
 */
class LeftMenu extends Component<stateFormData> {

    // constructor(props: any) {
    //     super(props);

    // };

    handleClick = (e: any) => {
        console.log('click ', e);
    };

    render() {
        const {formData} = this.props;
        // const menus = formData.menus;
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                theme={'dark'}
                defaultSelectedKeys={['sub1']}
                defaultOpenKeys={['1']}
              
                mode="inline"
            >
                {
                    menus.map((item) => (
                            <SubMenu
                                key={item.id}
                                title={
                                    <span>
                                        <Icon type={item.icon} />
                                        <span>{item.text}</span>
                                    </span>
                                }
                            >
                                {
                                    item.children.map((itemSub) => {
                                        if(itemSub.children && itemSub.children.length > 0) {
                                            return (
                                                <SubMenu key={itemSub.name} title={item.text}>
                                                    {
                                                        itemSub.children.map(itemSub2 => (
                                                            <Menu.Item key={itemSub2.name}>{itemSub2.text}</Menu.Item>
                                                        ))
                                                    }
                                                </SubMenu>

                                            )
                                        } else {
                                            return (
                                                <Menu.Item key={itemSub.name}>{itemSub.text}</Menu.Item>
                                            )
                                        }


                                    })
                                }
                             
                            </SubMenu>
                    )
                    )
                }

                
            </Menu>
        )
    }
}

export default connect((state: any) => ({
    formData: state.formData
}), {
    
})(LeftMenu);

// export default LeftMenu;