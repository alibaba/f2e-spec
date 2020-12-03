const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');

const writeVscodeFolder = require('../../utils/writeVscodeFolder');
const { fixtureFolder } = require('../const');

jest.mock('inquirer');

describe('init vscode config files should work as expected', () => {
  const initalVscodeConfig = {
    "customField": "custom value",
    "eslint.validate": [
      "html"
    ]
  };

  const vscodeConfigFilePath = path.resolve(fixtureFolder, './.vscode/settings.json');

  beforeEach(() => {
    fs.writeFileSync(vscodeConfigFilePath, JSON.stringify(initalVscodeConfig, null, 2));
  })

  test('should generate vscode config file', async () => {

    inquirer.prompt = jest.fn().mockResolvedValue({ 
      needFixOnSave: true
    });

    await writeVscodeFolder({
      cwd: fixtureFolder
    });

    const vscodeConfig = require(vscodeConfigFilePath);
    
    expect(vscodeConfig.customField).not.toBeUndefined();
    expect(vscodeConfig['eslint.validate']).toContain('html');
  })
})