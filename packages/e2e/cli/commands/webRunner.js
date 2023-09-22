/* eslint-disable import/no-dynamic-require */
const Mocha = require('mocha');
const glob = require('glob');
const TestDriver = require('../../drivers/WebTestDriver');

exports.runWebTests = async function (configPath, testCasesPattern) {
  const config = require(configPath);

  // 使用单例模式获取 TestDriver 实例
  const instance = TestDriver.getInstance(config);
  await instance.init();
  global.instance = instance;
  global.driver = instance.driver;
  const mochaInstance = new Mocha({
    timeout: 15000,
    reporter: 'xunit',
    reporterOptions: {
      output: './test-results.xml',
    },
  });
  const testFiles = glob.sync(testCasesPattern, {
    absolute: true,
    cwd: process.cwd(),
  });

  testFiles.forEach((file) => {
    mochaInstance.addFile(file);
  });
  try {
    mochaInstance.run();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
