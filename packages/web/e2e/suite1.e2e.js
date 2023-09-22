/* eslint-disable no-undef */

const { beforeAll } = require('@onekeyhq/e2e/api/testEnvPatch');

const {
  waitAndTap,
  waitAndTapText,
  delay,
  checkIfElementByTextIsVisible,
  relaunchApp,
  disableSynchronization,
} = require('@onekeyhq/e2e/api');

describe('Test suite 1', () => {
  beforeAll(async () => {
    await relaunchApp();
  });
  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  // it('"create wallet" button should be visible', async () => {
  //   await expect(element(by.id('create_wallet'))).toBeVisible();
  // });

  it('create wallet', async () => {
    await disableSynchronization();
    await waitAndTap('create_wallet', 5000);
    await waitAndTapText('password', 'Hello, World!', 5000);
    await waitAndTapText('confirmPassword', 'Hello, World!', 5000);
    await delay(5000);
    await waitAndTap('continue', 5000);

    await checkIfElementByTextIsVisible('Recovery Phrase');
  });
});
