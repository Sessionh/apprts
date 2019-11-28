import * as home from "./action_type";


export interface stateType {
    isMenuClose: boolean;
    menus: Array<object>
}

export interface stateFormData {
    saveIsMenuClose: (value: boolean) => void;
    formData: stateType;
}

// 控制左侧菜单
export const saveIsMenuClose = (value: boolean) => {
    
    return {
        type: home.SAVEISMENUCLOSE,
        value
    };
};