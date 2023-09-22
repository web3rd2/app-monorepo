/** @type {import('jest').Config} */
module.exports = {
  maxWorkers: 1,
  // globalSetup: './globalSetup.js',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  testEnvironment: 'detox/runners/jest/testEnvironment',
  // setupFilesAfterEnv: ['./setup.js'],
  testRunner: 'jest-circus/runner',
  testTimeout: 120000,
  testMatch: ['**/*.e2e.js'],
  reporters: ['detox/runners/jest/reporter'],
  verbose: true,
};
