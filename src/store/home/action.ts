import * as home from "./action_type";


// 控制左侧菜单
export const saveIsMenuClose = (value: boolean) => {
    
    return {
        type: home.SAVEISMENUCLOSE,
        value
    };
};