import { spawn } from 'child_process';

export async function runCommand(projectPath: string, command: string) {
  await new Promise<void>((resolve, reject) => {
    const child = spawn(command, {
      cwd: projectPath,
      shell: true,
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  });
}
