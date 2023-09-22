const path = require('path');

/** @type {Detox.DetoxConfig} */
module.exports = {
  logger: {
    level: process.env.CI ? 'debug' : undefined,
  },
  chrome: {
    args: [], // ['--headless', '--disable-gpu','--load-extension=${pathToYourUnpackedExtension}`'];
    // binaryPath:"",// 指定浏览器路径。
  },
  configurations: {
    index: 'http://localhost:3000',
    browser: 'chrome',
  },
};
