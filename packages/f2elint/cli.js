#!/usr/bin/env node
const { program } = require('commander');
const ora = require('ora');
const { cliInit } = require('./lib/init');
const exec = require('./lib/exec');
const scan = require('./lib/scan');
const update = require('./lib/update');
const log = require('./utils/log');
const writeVscodeFolder = require('./utils/writeVscodeFolder');
const printReport = require('./utils/printReport');
const { PKG_NAME, PKG_VERSION } = require('./utils/constants');

program.version(PKG_VERSION).description(`${PKG_NAME} 是《阿里巴巴前端规约》的配套 Lint 工具，提供简单的 CLI 和 Node.js API，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡点，降低项目实施规约的成本`);

program
  .command('init')
  .description('一键接入：为项目初始化规约工具和配置，可以根据项目类型和需求进行定制')
  .option('--vscode', '写入.vscode/setting.json配置')
  .action((params) => {
    if (params.vscode === true) {
      writeVscodeFolder();
    } else {
      cliInit();
    }
  });

program
  .command('scan')
  .description('一键扫描：对项目进行代码规约问题扫描')
  .option('-q, --quiet', '仅报告错误信息 - 默认: false')
  .option('-o, --output-report', '输出扫描出的规约问题日志')
  .option('-i, --include <dirpath>', '指定要进行规约扫描的目录')
  .option('--no-ignore', '忽略 eslint 的 ignore 配置文件和 ignore 规则')
  .action(async (cmd) => {
    log.info(`执行 ${PKG_NAME} 代码检查: `);

    const results = await scan({
      cwd: process.cwd(),
      include: cmd.include,
      quiet: Boolean(cmd.quiet),
      outputReport: cmd.outputReport,
      ignore: cmd.ignore, // 对应 --no-ignore
    });

    // 打印报告
    console.log(printReport(results, false));
  });

program
  .command('commit-scan')
  .description('代码提交检查: git commit 时对项目进行代码规约问题扫描，未')
  .action(async () => {
    const checking = ora(`执行 ${PKG_NAME} 代码提交检查: `);
    checking.start();

    const results = await scan({
      cwd: process.cwd(),
    });

    checking.stop();

    if (results.find(({ errorCount }) => errorCount > 0)) {
      process.exitCode = 1;
      console.log(printReport(results, false));
    }
  });

program
  .command('fix')
  .description('一键修复：自动修复项目的代码规约扫描问题')
  .option('-i, --include <dirpath>', '指定要进行修复扫描的目录')
  .option('--no-ignore', '忽略 eslint 的 ignore 配置文件和 ignore 规则')
  .action(async (cmd) => {
    log.info(`执行 ${PKG_NAME} 代码修复: `);

    const results = await scan({
      cwd: process.cwd(),
      include: cmd.include,
      fix: true,
      ignore: cmd.ignore, // 对应 --no-ignore
    });

    // 打印报告
    console.log(printReport(results, true));
  });

program
  .command('exec <linter>')
  .allowUnknownOption()
  .description(`执行 eslint / stylelint / commitlint 等 ${PKG_NAME} 依赖包命令`)
  .action(exec);

program
  .command('update')
  .description(`更新 ${PKG_NAME} 至最新版本`)
  .action(() => update(true));

program.parse(process.argv);
