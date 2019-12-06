/*
 * @Author: huyh
 * @Github:
 * @Date: 2019-11-12 10:59:08
 * @LastEditors: huyh
 * @LastEditTime: 2019-12-06 10:48:50
 * @description: 工具类
 */

 import {Icon} from 'antd';
 
/**
 * @description: 日期转换
 * @param {type} date 转换日期
 * @param {type} fmt 格式化样式  yyyy-MM-dd hh:mm:ss
 * @return: string  返回目标字符串
 */
export function formatDate(date: Date, fmt: string): string {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    }
    let o: any = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    };

    // 遍历这个对象
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + "";
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? str : ("00" + str).substr(str.length)
            );
        }
    }
    return fmt;
}

/**
 * @description: 
 * @param {function} fun 函数
 * @param {number} delay 延迟执行时间
 * @param {number} time 触发时间
 * @return: 
 */

export class throttle1 {
    
    constructor(fun: Function, delay: number, time: number) {
        this.run(fun, delay, time);
    }
    run(fun: Function, delay: number, time: number) {
        let timeout: number | undefined;
        let startTime: number = new Date().getTime();
        return this.action(timeout, startTime, fun, delay, time)

    };
    action(timeout: number | undefined, startTime: number, fun: Function, delay: number, time: number) {
        let context = this;
        console.log(this)
       
        let args = arguments;
        let curTime: number = new Date().getTime();
        console.log(startTime)
        console.log(curTime)
       

        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= time) {
            fun.apply(context, args);
            startTime = curTime;
            // 没达到触发间隔，重新设定定时器
        } else {
            timeout = setTimeout(fun, delay);
        }

    }
    
    

}

/**
 * @description: 创建阿里图标
 * @param {type} 
 * @return: 
 */
export const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1510260_3timii01fnu.js',
});








