/* eslint-disable import/no-dynamic-require */

const Mocha = require('mocha');
const path = require('path');
const fs = require('fs');

const { runWebTests } = require('./webRunner');
const { runMobileTests } = require('./mobileRunner');

exports.builder = {
  platform: {
    describe: 'Specify the platform (web or app)',
    type: 'string',
    demandOption: true, // 如果是必须的参数，可以添加这个属性
  },
  config: {
    describe: 'Specify the configuration file',
    type: 'string',
  },
  log: {
    describe: 'Specify log level for debugging',
    type: 'string',
  },
};

exports.handler = async function ({
  platform,
  config,
  log,
  'test-cases': testCasesPattern,
}) {
  const configAbsPath = path.resolve(process.cwd(), config);

  if (!configAbsPath || !fs.existsSync(configAbsPath)) {
    console.error(`Configuration file ${config} does not exist!`);
    process.exit(1);
  }
  // 根据平台运行相应的测试
  if (platform === 'web') {
    await runWebTests(
      configAbsPath,
      path.resolve(process.cwd(), testCasesPattern),
    );
  } else if (platform === 'mobile') {
    await runMobileTests(configAbsPath);
  }
};
