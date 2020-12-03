const path = require('path');
const fs = require('fs');
const execa = require('execa');

const { fixtureFolder } = require('./const');

const packageJson = require('../package.json');

const cli = (args, options) => execa(path.resolve(__dirname, '../cli.js'), args, options);

// folder with test files
const folderWithWarning = path.resolve(__dirname, './fixtures/warning');

test.only('--version should output right version', async () => {
  const { stdout } = await cli(['--version']);

  expect(stdout).toBe(packageJson.version);
});

describe(`'scan' command`, () => {

  test(`should output rule problems`, async () => {
    const { stdout } = await cli(['scan', '--no-ignore', '--include', folderWithWarning]);
  
    expect(stdout).toMatch(/\d+ problem/);
  })

  test(`should ignore warning`, async () => {
    const { stdout } = await cli(['scan', '--no-ignore', '--quiet', '--include', folderWithWarning]);
    expect(stdout).toMatch(/no problems/);
  })
})

describe(`'fix' command`, () => {
  const autofixFolder = path.resolve(__dirname, './fixtures/autofix');
  const tempFilePath = path.join(autofixFolder, 'result/temp.js');
  const errorCodeText = fs.readFileSync(`${autofixFolder}/semi-error.js`).toString();
  const expectedCodeText = fs.readFileSync(`${autofixFolder}/semi-expected.js`).toString();

  
  beforeEach(() => {
    fs.writeFileSync(tempFilePath, errorCodeText);
  })

  test('should autofix problematic code', async () => {
    const res = await cli(['fix', '--no-ignore', '--include', path.dirname(tempFilePath)]);
    const resultCodeText = fs.readFileSync(tempFilePath).toString();
    expect(resultCodeText).toEqual(expectedCodeText);
  });

  afterEach(() => {
    fs.unlinkSync(tempFilePath);
  })
});

describe(`'exec' command`, () => {
  const semverRegex = /(\d+)\.(\d+)\.(\d+)/;

  test(`'exec eslint' should work as expected`, async () => {
    const { stdout } = await cli(['exec', 'eslint', '--version']);
    expect(stdout).toMatch(semverRegex);
  })

  test(`'exec stylelint' should work as expected`, async () => {
    const { stdout } = await cli(['exec', 'stylelint', '--version']);
    expect(stdout).toMatch(semverRegex);
  })

  test(`'exec commitlint' should work as expected`, async () => {
    const { stdout } = await cli(['exec', 'commitlint', '--version']);
    expect(stdout).toMatch(semverRegex);
  })
})

