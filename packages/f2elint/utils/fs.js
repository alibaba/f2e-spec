/*
 * 文件处理帮助函数
 */
const fs = require('fs-extra');

/**
 * 批量检查文件是否存在，返回存在的文件数组
 * @param {*} files 待检查的文件数组
 * @param {*} transformPath 路径转换方法
 */
function batchExistFiles(files, transformPath) {
  const existFiles = [];
  for (let i = 0; i < files.length; i++) {
    const absolutePath = transformPath(files[i]);
    if (fs.existsSync(absolutePath)) {
      existFiles.push(files[i]);
    }
  }
  return existFiles;
}

/**
 * 批量删除文件
 * @param {*} files 待删除的文件数组
 * @param {*} transformPath 路径转换方法
 */
function batchDeleteFiles(files, transformPath) {
  for (let i = 0; i < files.length; i++) {
    const absolutePath = transformPath(files[i]);
    if (fs.existsSync(absolutePath)) {
      fs.removeSync(files[i]);
      console.log(files[i], '删除成功');
    }
  }
}

module.exports = {
  batchExistFiles,
  batchDeleteFiles,
};
