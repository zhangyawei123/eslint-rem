// 深拷贝
/** 
 * 第一种方法
 * JSON.parse(JSON.stringify(obj)) 是最简单的实现方式，但是有一些缺陷：
 * 1.对象的属性值是函数时，无法拷贝。
 * 2.原型链上的属性无法拷贝
 * 3.不能正确的处理 Date 类型的数据
 * 4.不能处理 RegExp
 * 5.会忽略 symbol
 * 6.会忽略 undefined
*/
/**
 * 第二种方法
 * 实现一个 deepClone 函数
 * 1.如果是基本数据类型，直接返回
 * 2.如果是 RegExp 或者 Date 类型，返回对应类型
 * 3.如果是复杂数据类型，递归。
 * 4.考虑循环引用的问题
 */
export function deepClone(obj, hash = new WeakMap()) { // 递归拷贝
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  if (obj === null || typeof obj !== 'object') {
    // 如果不是复杂类型，直接返回
    return obj
  }
  if (hash.has(obj)) {
    return hash.get(obj)
  }
  /**
   * 如果obj是数组，那么obj.constructor 是 [Function: Array]
   * 如果obj是对象，那么obj.constructor 是 [Function: Object]
   */
  let t = new obj.constructor()
  hash.set(obj, t)
  for (let key in obj) {
    // 递归
    if (obj.hasOwnProperty(key)) { // 是否为自身属性
      t[key] = deepClone(obj[key], hash)
    }
  }
  return t
}
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export function debounce(func, wait, immediate = true) {
  let timeout, result
  // 延迟执行函数
  const later = (context, args) => setTimeout(()=> {
    timeout = null // 倒计时结束
    if (!immediate) {
      // 执行回调
      result = func.apply(context, args)
      context = args = null
    }
  }, wait)
  let debounced = function (...params) {
    if (!timeout) {
      timeout = later(this, params)
      if (immediate) {
        // 立即执行
        result = func.apply(this, params)
      }
    } else {
      clearTimeout(timeout)
      // 函数在每个等待时延的结束被调用
      timeout = later(this, params)
    }
    return result
  }
  // 提供外部清楚定时器的方法
  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
export function throttle(func, wait ,type = 1) {
  if(type===1){
      var previous = 0
  }else if(type===2){
      var timeout
  }
  return function() {
      let context = this
      let args = arguments
      if(type===1){
          let now = Date.now()

          if (now - previous > wait) {
              func.apply(context, args)
              previous = now
          }
      }else if(type===2){
          if (!timeout) {
              timeout = setTimeout(() => {
                  timeout = null
                  func.apply(context, args)
              }, wait)
          }
      }
  }
}
/**
 * @desc 数组去重
 */
export function uniq(arr) {
  var result = []
  for(let i=0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }
  return result
}
/**
 * @desc 判断是否是手机号码
 */
export function isPhone(tel) {
  var regx = /^1[34578]\d{9}$/
  return regx.test(tel)
}
/**
 * @desc 判断是否是邮箱
 */
export function isEmail(email) {
  /* eslint-disable */
  var regx = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/
  /* eslint-disable */
  return regx.test(email)
}
/**
 * @desc 验证是否是身份证
 */
export function isCardNo(number) {
  var regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return regx.test(number)
}
/**
 * @desc map函数
 */
