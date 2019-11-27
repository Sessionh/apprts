import * as home from "./action_type";



let defaultState = {
  isMenuClose: false, // 控制左侧菜单关闭
  menus: [
    {
      id: 1,
      text: '首页',
      icon: 'appstore'
    }
  ]
 
};

interface actionInt {
  type?: string;
  datatype?: any;
  value?: object;
  path?: string;
}

// 首页表单数据
export const formData = (state = defaultState, action: actionInt = {}): any => {
  switch (action.type) {
    case home.SAVEISMENUCLOSE:
      return { ...state, ...{isMenuClose : action.value} };
    default:
      return state;
  }
};
