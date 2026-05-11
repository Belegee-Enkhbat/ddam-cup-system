/// <reference types="node" />

import { spawn } from 'node:child_process';

const children = [
  spawn('npx', ['vite', '--port=3000', '--host=0.0.0.0'], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  }),
];

let shuttingDown = false;

function shutdown(code = 0) {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;
  for (const child of children) {
    if (!child.killed) {
      child.kill('SIGTERM');
    }
  }
  process.exit(code);
}

for (const child of children) {
  child.on('exit', (code) => {
    shutdown(code ?? 0);
  });
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));
