const path = require('path');
const fsExtra = require('fs-extra');
const fs = require('fs');
const inquirer = require('inquirer');

const { init } = require('../../lib/init');
const { fixtureFolder } = require('../const');

const initTemplateFolder = path.resolve(fixtureFolder, './template/init');
const initTestgroundFolder = path.resolve(fixtureFolder, './testground/init')

const initConfig = {
  cwd: initTestgroundFolder,
  checkVersionUpdate: false
}

jest.mock('inquirer');

describe('init', () => {
  beforeEach(() => {
    fsExtra.removeSync(initTestgroundFolder);
    fsExtra.copySync(initTemplateFolder, initTestgroundFolder);
  });

  test('node api init should work as expected', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ 
      enable: true,
      type: 'react',
      isOverWrite: true
    });
    await init(initConfig);

    const outputF2eConfigFile = path.resolve(initTestgroundFolder, './f2elint.config.js');
    
    expect(fs.existsSync(outputF2eConfigFile)).toBe(true);
  });

});

