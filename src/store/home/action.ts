import * as home from "./action_type";

interface menuType {
    id: number;
    text: string;
    icon: string;
    name: string;
    children: Array<menuType>
  }
export interface stateType {
    isMenuClose: boolean;
    menus: Array<menuType>
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