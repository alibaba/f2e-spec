import { spawn } from 'child_process';
import commandExists from 'command-exists';

export async function install(projectPath: string) {
  let npm_command = 'npm';
  if (process.env.npm_command) {
    // pnpm, yarn support npm_command environment variable
    npm_command = process.env.npm_command;
  } else if (await commandExists('tnpm')) {
    // tnpm of Alibaba and Ant Group
    npm_command = 'tnpm';
  } else if (await commandExists('cnpm')) {
    // cnpm of China
    npm_command = 'cnpm';
  }

  await new Promise<void>((res, rej) => {
    const child = spawn(`${npm_command} update -f`, {
      cwd: projectPath,
      shell: true,
    });

    child.on('close', (code) => {
      if (code === 0) {
        res();
      } else {
        rej();
      }
    });
  });
}
