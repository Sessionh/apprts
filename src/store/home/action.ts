import * as home from "./action_type";

export interface menuType {
    id?: number;
    text?: string;
    icon?: string;
    name?: string;
    isClose?: boolean;
    children?: Array<menuType>
}
export interface stateType {
    isMenuClose: boolean;
    menus: Array<menuType>;
    tagMenus: Array<menuType>;
    isCheckedMenu: string;
}


export interface stateFormData {
    saveIsMenuClose: (value: boolean) => void;
    saveTagMenus: (value: Array<menuType>) => void;
    saveIsCheckedMenu: (value: string) => void
    formData: stateType;
}

// 控制左侧菜单
export const saveIsMenuClose = (value: boolean) => {
    
    return {
        type: home.SAVEISMENUCLOSE,
        value
    };
};

/**
 * @description: 保存菜单数据
 * @param {type} 
 * @return: value
 */
export const saveMenus = (value: menuType) => {

    return {
        type: home.SVAEMENUS,
        value
    }

}

/**
 * @description: 保存当前缓存的菜单
 * @param {type} 
 * @return: value
 */
export const saveTagMenus = (value: Array<menuType>) => {
    return {
        type: home.SAVETAGMENUS,
        value
    }
}

/**
 * @description: 保存当前菜单选中项
 * @param {type} 
 * @return: 
 */
export const saveIsCheckedMenu = (value: string) => {
    return {
        type: home.SAVEISCHECKEDMENU,
        value
    }
}