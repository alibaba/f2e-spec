import { includeIgnoreFile } from '@eslint/compat';
import { Linter } from 'eslint';
import { existsSync } from 'node:fs';
import path from 'node:path';

/** Include ignore patterns from `.gitignore` at project root */
const gitignorePath = path.join(process.cwd(), '.gitignore');
const gitignore: Linter.Config = existsSync(gitignorePath) ? includeIgnoreFile(gitignorePath) : {};

export default gitignore;
