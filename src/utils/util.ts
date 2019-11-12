/*
 * @Author: huyh
 * @Github:
 * @Date: 2019-11-12 10:59:08
 * @LastEditors: huyh
 * @LastEditTime: 2019-11-12 11:09:47
 * @description: 工具类
 */

/**
 * @description: 日期转换
 * @param {Date} date 转换日期
 * @param {string} fmt 格式化样式
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
