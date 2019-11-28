import * as home from "./action_type";



let defaultState = {
  isMenuClose: false, // 控制左侧菜单关闭
  menus: [
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

};
interface menuType {
  id: number;
  text: string;
  icon: string;
}


export interface stateType {
  isMenuClose: boolean;
  menus: Array<menuType>
}

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
    default:
      return state;
  }
};
