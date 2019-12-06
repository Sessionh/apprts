import * as home from "./action_type";
import { stateType } from './action';

let menus = [
  {
    text: 'Dashboard',
    name: 'Dashboard',
    icon: 'appstore',
    children: [
      {
        path: '/console',
        name: 'console',
        text: '主控台'

      },
      {
        path: '/monitor',
        name: 'monitor',
        text: '监控台'

      },
      {
        path: '/workplace',
        name: 'workplace',
        text: '工作台'

      }    
     
    ]


  },
  {
    text: '表单页面',
    name: 'myForm',
    icon: 'appstore',
    children: [
      {
        path: '/basicForm',
        name: 'basicForm',
        text: '基础表单'

      },
      {
        path: '/advancedForm',
        name: 'advancedForm',
        text: '高级表单'

      },
      {
        path: '/stepForm',
        name: 'stepForm',
        text: '分步表单'

      },
      {
        path: '/detailForm',
        name: 'detailForm',
        text: '表单详情'

      },    
      // {
       
      //   path: '/sub4',
      //   name: 'sub4',
      //   text: 'sub4',
      //   children: [
      //     {
      //       path: '/subName1',
      //       name: 'subName1',
      //       text: '子菜单1'

      //     },
      //     {
      //       path: '/subName2',
      //       name: 'subName2',
      //       text: '子菜单2'

      //     },

      //   ]

      // }
    ]


  },
  {
    text: '列表页面',
    name: 'tablePage',
    icon: 'appstore',
    children: [
      {
        path: '/basicList',
        name: 'basicList',
        text: '基础列表'

      },
      {
        path: '/cardList',
        name: 'cardList',
        text: '卡片列表'

      },
      {
        path: '/goodsList',
        name: 'goodsList',
        text: '商品列表'

      },
      {
        path: '/searchList',
        name: 'searchList',
        text: '查询表格'

      }        
     
    ]


  },
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
