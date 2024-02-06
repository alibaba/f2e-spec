import { spawn } from 'child_process';

export function install(projectPath: string) {
  return new Promise<void>((res, rej) => {
    const child = spawn(`${process.env.npm_command} update -f`, {
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
