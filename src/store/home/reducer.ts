import * as home from './action_type';

let defaultState = {
  orderSum: '', //金额
  name: '张三', //姓名
  phoneNo: '', //手机号
  imgpath: '', //图片地址
}
interface actionInt {
  type?: string;
  datatype?: any;
  value?: object;
  path?: string;
}

// 首页表单数据
export const formData = (state = defaultState , action:actionInt = {}): any => {
  switch(action.type){
    case home.SAVEFORMDATA:
      return {...state, ...{[action.datatype]: action.value}};
    case home.SAVEIMG:
      return {...state, ...{imgpath: action.path}};
    case home.CLEARDATA:
      return {...state, ...defaultState};
    default:
      return state;
  }
}

