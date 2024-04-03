import { spawn } from 'child_process';
import commandExists from 'command-exists';

export async function install(projectPath: string) {
  let npm_command = 'npm update -f';
  if (process.env.npm_command) {
    // pnpm, yarn support npm_command environment variable
    npm_command = process.env.npm_command;
  } else {
    // tnpm of Alibaba and Ant Group
    try {
      await commandExists('tnpm');
      npm_command = 'tnpm update -f';
    } catch (e1) {
      // cnpm of China
      try {
        await commandExists('cnpm');
        npm_command = 'cnpm update -f';
      } catch (e2) {
        npm_command = 'npm update -f';
      }
    }
  }

  await new Promise<void>((res, rej) => {
    const child = spawn(npm_command, {
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
