// jest 的覆盖率收集无法收集到 child process 的执行情况，临时用 nyc jest 解决
// 详见 issue: https://github.com/facebook/jest/issues/3190
module.exports = {
  collectCoverage: true,
  coverageReporters: ['none'],
};
