#!/usr/bin/env node

import { cancel, confirm, intro, isCancel, outro, select, spinner, text } from '@clack/prompts';
import chalk from 'chalk';
import { Command } from 'commander';
import { existsSync, readFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { f2elint } from '.';
import { runCommand } from './private/runCommand';
import { TemplateType } from './types';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJson = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf-8'));

if (process.argv.length > 2 && !process.argv.includes('init')) {
  // Non-interactive

  const program = new Command('f2elint');

  program
    .argument('[project]', '项目位置')
    .option('--template <template>', '模版类型', 'react-ts')
    .option('--stylelint', '启用 Stylelint', false)
    .option('--prettier', '启用 Prettier', false)
    .option('--lint-staged', '启用 Lint-Staged', false)
    .option('--commitlint', '启用 Commitlint', false)
    .action(f2elint);

  program.helpOption('-h, --help', '显示帮助');

  program.version(packageJson.version, '-v, --version', '显示版本');

  program.parse();
} else {
  // Interactive

  (async () => {
    // 空行
    console.log(' ');

    intro(`${chalk.bold(chalk.cyan('🚀 阿里巴巴前端规约'))} ${chalk.dim(packageJson.version)}`);

    const project = await text({
      message: '📁 选择项目位置',
      initialValue: process.cwd(),
      validate: (value) => {
        if (!value || value.length === 0) {
          return '根目录路径必填！';
        } else {
          return undefined;
        }
      },
    });

    if (isCancel(project)) {
      cancel('👋 已取消');
      process.exit(0);
    }

    const projectPath = resolve(project || '.');
    const isGitRoot = existsSync(join(projectPath, '.git'));

    const template = await select<any, TemplateType>({
      message: '🧰 选择预设模版',
      options: [
        { value: 'react-ts', label: 'React (TypeScript)' },
        { value: 'react-js', label: 'React (JavaScript)' },
        { value: 'vue-ts', label: 'Vue (TypeScript)' },
        { value: 'vue-js', label: 'Vue (JavaScript)' },
        { value: 'egg-ts', label: 'Egg (TypeScript)' },
        { value: 'egg-js', label: 'Egg (JavaScript)' },
        { value: 'node-ts', label: 'Node (TypeScript)' },
        { value: 'node-js', label: 'Node (JavaScript)' },
        { value: 'base-ts', label: 'Base (TypeScript)' },
        { value: 'base-js', label: 'Base (JavaScript)' },
      ],
    });

    if (isCancel(template)) {
      cancel('👋 已取消');
      process.exit(0);
    }

    const stylelint = await confirm({
      message: '💅 启用 Stylelint 样式检查',
    });

    if (isCancel(stylelint)) {
      cancel('👋 已取消');
      process.exit(0);
    }

    const prettier = await confirm({
      message: '💅 启用 Prettier 代码格式化',
    });

    if (isCancel(prettier)) {
      cancel('👋 已取消');
      process.exit(0);
    }

    let lintStaged: boolean | symbol = false;
    let commitlint: boolean | symbol = false;

    if (isGitRoot) {
      lintStaged = await confirm({
        message: '👮‍ 启用 Lint Staged 检查',
      });

      if (isCancel(lintStaged)) {
        cancel('👋 已取消');
        process.exit(0);
      }

      commitlint = await confirm({
        message: '👮‍ 启用 Commitlint 检查',
      });

      if (isCancel(commitlint)) {
        cancel('👋 已取消');
        process.exit(0);
      }
    }

    const s1 = spinner();
    s1.start('🚧 正在初始化项目');

    try {
      await f2elint(projectPath, {
        template,
        stylelint,
        prettier,
        lintStaged,
        commitlint,
        disableLog: true,
      });
      s1.stop('✅ 初始化项目完成');
    } catch (error) {
      s1.stop('❌ 初始化项目失败');
      console.error(error);
      process.exit(1);
    }

    const npmCommand = await select<any, string>({
      message: '📦 安装或更新依赖',
      options: [
        { value: 'npm update', label: 'npm' },
        { value: 'pnpm update', label: 'pnpm' },
        { value: 'yarn update', label: 'yarn' },
        { value: 'tnpm update', label: 'tnpm' },
        { value: 'cnpm update', label: 'cnpm' },
        { value: '', label: '跳过' },
      ],
    });

    if (isCancel(npmCommand)) {
      cancel('👋 已取消');
      process.exit(0);
    }

    if (npmCommand) {
      const s2 = spinner();
      s2.start('🚧 正在安装依赖');
      try {
        await runCommand(projectPath, npmCommand);
        s2.stop('✅ 安装依赖成功');
      } catch (error) {
        s2.stop('❌ 安装依赖失败，请尝试手动运行命令');
        process.exit(1);
      }
    }

    outro('🎉 规约初始化完成，建议安装推荐的 VS Code 插件并重启 VS Code');
  })();
}
