/*
 * 对package相关操作的函数
 * 考虑到node版本问题，慎用es6高级语法
 */
const spawn = require('cross-spawn');
const { arrToObj } = require('./typeHelper');
const commandExistsSync = require('command-exists').sync;
/**
 * 获取交集
 * @param {*} dependenciesArr 依赖的数组 {key:'',value}[]
 * @param {*} packageArr 包数组，string[]
 */
function getRepeatPackage(dependenciesArr, packageArr) {
  const arr = [];
  for (let index = 0; index < packageArr.length; index++) {
    if (dependenciesArr.find(d => d.key === packageArr[index])) {
      const pkg = dependenciesArr.find(x => x.key === packageArr[index]);
      arr.push(pkg);
    }
  }
  return arr;
}

/**
 * 移除交集，返回剩余的包数组
 * @param {*} dependenciesArr
 * @param {*} packageArr 要移除的包
 */
function removeRepeatPackage(dependenciesArr, packageArr) {
  const arr = [];
  for (let index = 0; index < dependenciesArr.length; index++) {
    if (!packageArr.find(x => x.key === dependenciesArr[index].key)) {
      arr.push(dependenciesArr[index]);
    }
  }
  return arr;
}

function getLeaveOverPackageFromConfig(dependenciesArr, packageArr) {
  const leaveOverArr = removeRepeatPackage(dependenciesArr, packageArr);
  const leaveOverDep = arrToObj(leaveOverArr.filter(x => x.isDev === false));
  const leaveOverDevDep = arrToObj(leaveOverArr.filter(x => x.isDev === true));
  return {
    leaveOverDep, leaveOverDevDep,
  };
}

/**
 * 卸载已安装包
 * @param {*} arr
 * @param {*} npmType npm类型：tnpm、npm
 */
async function uninstallPackages(arr) {
  const npm = commandExistsSync('tnpm') ? 'tnpm' : 'npm';
  for (let index = 0; index < arr.length; index++) {
    // console.log(arr[index]);
    spawn.sync(npm, ['uninstall', arr[index].key, arr[index].isDev ? '--save-dev' : '--save'], {
      stdio: 'inherit',
    });
  }
}

module.exports = {
  getRepeatPackage,
  removeRepeatPackage,
  getLeaveOverPackageFromConfig,
  uninstallPackages,
};
