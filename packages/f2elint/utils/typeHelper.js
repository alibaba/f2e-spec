/*
 * 类型帮助函数
 */

/**
 * 对象转数组
 * @param {*} object
 * @param {*} extra  额外要并入的对象
 */
function objToArr(object, extra) {
  const arr = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      arr.push({ key, value: object[key], ...extra });
    }
  }
  return arr;
}

/**
 * 数组转对象
 * @param {*} arr
 */
function arrToObj(arr) {
  const obj = {};
  for (let index = 0; index < arr.length; index++) {
    obj[arr[index].key] = arr[index].value;
    // Reflect.set(obj, arr[index].key, arr[index].value);
  }
  return obj;
}
module.exports = {
  objToArr,
  arrToObj,
};
