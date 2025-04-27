#!/usr/bin/env node

import { cancel, intro, isCancel, outro, select, spinner, text } from '@clack/prompts';
import chalk from 'chalk';
import { Command } from 'commander';
import { readFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import f2etest, { TemplateType } from '.';
import { runCommand } from './private/runCommand';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJson = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf-8'));

if (process.argv.length > 2) {
  // Non-interactive

  const program = new Command('f2etest');

  program
    .argument('[project]', '项目位置')
    .option('--template <template>', '模版类型', 'react')
    .option('--unit-test <framework>', '单元测试框架', 'vitest')
    .option('--e2e-test <framework>', '端到端测试框架', 'playwright')
    .action(f2etest);

  program.helpOption('-h, --help', '显示帮助');

  program.version(packageJson.version as string, '-v, --version', '显示版本');

  program.parse();
} else {
  // Interactive

  (async () => {
    // 空行
    console.log(' ');

    intro(`${chalk.bold(chalk.cyan('🚀 阿里巴巴前端测试'))} ${chalk.dim(packageJson.version)}`);

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

    const template = await select<TemplateType>({
      message: '🧰 选择预设模版',
      options: [
        { value: 'react', label: 'React' },
        { value: 'preact', label: 'Preact' },
        { value: 'web', label: 'Web' },
        { value: 'base', label: 'Base' },
      ],
    });

    if (isCancel(template)) {
      cancel('👋 已取消');
      process.exit(0);
    }

    const s1 = spinner();
    s1.start('🚧 正在初始化项目');

    try {
      await f2etest(projectPath, {
        template,
        disableLog: true,
      });
      s1.stop('✅ 初始化项目完成');
    } catch (error) {
      s1.stop('❌ 初始化项目失败');
      console.error(error);
      process.exit(1);
    }

    const npmCommand = await select<string>({
      message: '📦 安装或更新依赖',
      options: [
        { value: 'npm i', label: 'npm' },
        { value: 'pnpm i', label: 'pnpm' },
        { value: 'yarn', label: 'yarn' },
        { value: 'tnpm i', label: 'tnpm' },
        { value: 'cnpm i', label: 'cnpm' },
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
        console.error(error);
        process.exit(1);
      }
    }

    outro('🎉 测试工具初始化完成，建议安装推荐的 VS Code 插件并重启 VS Code');
  })();
}
