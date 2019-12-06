import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import { stateFormData, menuType, saveTagMenus, saveIsCheckedMenu } from '../../store/home/action'
const { SubMenu } = Menu;


interface LeftMenusateType {
    nowMenu: Array<menuType>

}

/**
 * @description: 左侧菜单栏
 * @param {type} 
 * @return: 
 */
class LeftMenu extends Component<stateFormData> {

    // constructor(props: any) {
    //     super(props);

    // };
    state: LeftMenusateType = {
        nowMenu: []
    }
  

     handleClick = async (e: any) => {
        
        const { formData, saveTagMenus, saveIsCheckedMenu } = this.props;
        const {nowMenu} = this.state;
        
        let tagMenus = formData.tagMenus;
        await this.recursionMenus(formData.menus, e.key);
        if (nowMenu[0]) {
            const result = tagMenus.filter(ret => ret.name === nowMenu[0].name);
            if (result.length === 0) {
                nowMenu[0].isClose = true
                tagMenus.push(nowMenu[0])
                await saveTagMenus(tagMenus)
              
            }
            if (nowMenu[0].name && formData.isCheckedMenu !== nowMenu[0].name) {
                saveIsCheckedMenu(nowMenu[0].name)
            }

        }
        
      
        this.setState({
            nowMenu: []
        })
    
    };
    recursionMenus = (menu: Array<menuType>, key: string): menuType => {
        let result:menuType = {}
        menu.forEach(ret => {

            if (ret.children) {
                this.recursionMenus(ret.children, key)

            } else {

                if (ret.name === key) {
                    let nowMenu = this.state.nowMenu;
                    nowMenu.push(ret)
                    this.setState({
                        nowMenu
                    })
                   return;
                  
                  
                  


                }
            }
        })
      

        return result;


        
    };

    render() {
        const { formData } = this.props;
        const { menus, isCheckedMenu, isMenuClose } = formData
       
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: isMenuClose? 80 : 256 }}
                theme={'dark'}
                defaultSelectedKeys={[isCheckedMenu]}
                selectedKeys={[isCheckedMenu]}
                defaultOpenKeys={['1']}
                inlineCollapsed={isMenuClose}

                mode="inline"
            >
                {
                    menus.map((item) => (
                        <SubMenu
                            key={item.name}
                            title={
                                <span>
                                    <Icon type={item.icon} />
                                    <span>{item.text}</span>
                                </span>
                            }
                        >
                            {
                                item.children ? item.children.map((itemSub) => {
                                    if (itemSub.children && itemSub.children.length > 0) {
                                        return (
                                            <SubMenu key={itemSub.name} title={itemSub.text}>
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


                                }) : null
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
    saveTagMenus,
    saveIsCheckedMenu

})(LeftMenu);