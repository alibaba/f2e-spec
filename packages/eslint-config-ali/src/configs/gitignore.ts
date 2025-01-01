import { includeIgnoreFile } from '@eslint/compat';
import { Linter } from 'eslint';
import path from 'node:path';

/** Include ignore patterns from `.gitignore` at project root */
const gitignore: Linter.Config = includeIgnoreFile(path.join(process.cwd(), '.gitignore'));

export default gitignore;
