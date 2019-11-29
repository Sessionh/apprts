import * as home from "./action_type";
import { stateType } from './action';

let menus = [
  {
    id: 1,
    text: '首页',
    name: 'mains',
    icon: 'appstore',
    children: [
      {
        id: 1,
        path: '/sub1',
        name: 'sub1',
        text: '主控台'

      },
      {
        id: 2,
        path: '/sub2',
        name: 'subN2',
        text: '监控台'

      },
      {
        id: 3,
        path: '/sub3',
        name: 'subN3',
        text: '工作台'

      },
      {
        id: 4,
        path: '/sub4',
        name: 'sub4',
        text: 'sub4',
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

let defaultState = {
  isMenuClose: false, // 控制左侧菜单关闭
  tagMenus: [], // 打开过的 菜单
  isCheckedMenu: '', // 当前选中菜单
  menus: menus

};


interface actionInt {
  type?: string;
  datatype?: any;
  value?: object;
  path?: string;
}

// 首页表单数据
export const formData = (state: stateType = defaultState, action: actionInt = {}): any => {
  switch (action.type) {
    case home.SAVEISMENUCLOSE:
      return { ...state, ...{ isMenuClose: action.value } };
    case home.SVAEMENUS:
      return { ...state, ...{ menus: action.value } };
    case home.SAVETAGMENUS:
      return { ...state, ...{ tagMenus: action.value } };
    case home.SAVEISCHECKEDMENU:
      return {...state, ...{ isCheckedMenu: action.value }}
    default:
      return state;
  }
};
