const path = require('path');

/** @type {Detox.DetoxConfig} */
module.exports = {
  logger: {
    level: process.env.CI ? 'debug' : undefined,
  },
  testRunner: {
    args: {
      '$0': 'yarn dlx jest',
      config: path.resolve(process.cwd(), 'e2e/jest.config.js'),
      maxWorkers: process.env.CI ? 2 : undefined,
      _: [path.resolve(process.cwd(), 'e2e')],
    },
  },
  chrome: {
    args: [], // ['--headless', '--disable-gpu','--load-extension=${pathToYourUnpackedExtension}`'];
    // binaryPath:"",// 指定浏览器路径。
  },
  configurations: {
    index: 'http://localhost:3000/',
    browser: 'chrome',
  },
};
