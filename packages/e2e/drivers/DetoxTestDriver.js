/* eslint-disable no-return-await */
const { waitFor, element, by, device } = require('detox');

const TIMEOUT = 8000;

class TestHelpers {
  static async waitAndTap(elementId, timeout, index) {
    await waitFor(element(by.id(elementId)))
      .toBeVisible()
      .withTimeout(timeout || TIMEOUT);

    return element(by.id(elementId)).longPress();
  }

  static async checkIfElementByTextIsVisible(text) {
    return await waitFor(element(by.text(text)))
      .toBeVisible()
      .withTimeout(25000);
  }

  static async waitAndTapText(elementId, text, timeout) {
    await waitFor(element(by.id(elementId)))
      .toBeVisible()
      .withTimeout(timeout || TIMEOUT);

    return element(by.id(elementId)).replaceText(text);
  }

  static tap(elementId) {
    return element(by.id(elementId)).tap();
  }

  static tapByText(text, index) {
    return element(by.text(text))
      .atIndex(index || 0)
      .tap();
  }

  static doubleTapByText(text, index) {
    return element(by.text(text))
      .atIndex(index || 0)
      .multiTap(2);
  }

  static tapAtPoint(elementId, point) {
    return element(by.id(elementId)).tap(point);
  }

  static tapItemAtIndex(elementID, index) {
    return element(by.id(elementID))
      .atIndex(index || 0)
      .tap();
  }

  static tapItemAtIndexByLabel(elementID, index) {
    return element(by.label(elementID, index))
      .atIndex(index || 0)
      .tap();
  }

  static async typeText(elementId, text) {
    await TestHelpers.tap(elementId);
    return element(by.id(elementId)).typeText(text);
  }

  static async typeNumbers(elementId, text, submitLabel) {
    await element(by.id(elementId)).replaceText(text.replace('\n', ''));
    return element(by.label(submitLabel)).atIndex(0).tap();
  }

  static async clearField(elementId) {
    return element(by.id(elementId)).replaceText('');
  }

  static async tapAndLongPress(elementId) {
    await TestHelpers.tap(elementId);
    return element(by.id(elementId)).longPress(2000);
  }

  static async tapAndLongPressAtIndex(elementId, index) {
    return element(by.id(elementId))
      .atIndex(index || 0)
      .longPress(2000);
  }

  static async replaceTextInField(elementId, text) {
    return element(by.id(elementId)).replaceText(text);
  }

  static tapAlertWithButton(text, index) {
    if (device.getPlatform() === 'android') {
      return element(by.text(text))
        .atIndex(index || 0)
        .tap();
    }

    return element(by.label(text)).atIndex(0).tap();
  }

  // static async tapWebviewElement(elementId) {
  //   // this method only words on android: https://wix.github.io/Detox/docs/api/webviews/
  //   return web.element(by.web.id(elementId)).tap();
  // }

  static async checkIfVisible(elementId) {
    await waitFor(element(by.id(elementId)))
      .toBeVisible()
      .withTimeout(15000);
  }

  static async checkIfNotVisible(elementId) {
    await waitFor(element(by.id(elementId)))
      .not.toBeVisible()
      .withTimeout(10000);
  }

  static async checkIfElementWithTextIsNotVisible(text) {
    await expect(element(by.text(text)).atIndex(0)).not.toBeVisible();
  }

  static async checkIfElementNotToHaveText(elementId, text) {
    await waitFor(element(by.id(elementId)))
      .toBeVisible()
      .withTimeout(10000);

    return expect(element(by.id(elementId))).not.toHaveText(text);
  }

  static async checkIfExists(elementId) {
    await waitFor(element(by.id(elementId)))
      .toBeVisible()
      .withTimeout(10000);
    return expect(element(by.id(elementId))).toExist();
  }

  static async checkIfHasText(elementId, text) {
    await waitFor(element(by.id(elementId)))
      .toBeVisible()
      .withTimeout(10000);

    return expect(element(by.id(elementId))).toHaveText(text);
  }

  static async checkIfElementHasString(elementId, text) {
    return expect(element(by.id(elementId))).toString(text);
  }

  static checkIfToggleIsOn(elementID) {
    return expect(element(by.id(elementID))).toHaveToggleValue(true);
  }

  static relaunchApp() {
    return device.launchApp({ newInstance: true });
  }

  static disableSynchronization() {
    return device.disableSynchronization();
  }

  static async retry(maxAttempts, testLogic) {
    // eslint-disable-next-line no-plusplus
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        await testLogic();
        return;
      } catch (error) {
        if (attempt === maxAttempts) {
          throw error;
        } else {
          // eslint-disable-next-line no-console
          console.log('Test attempt failed', {
            attempt,
            error,
          });
        }
      }
    }
  }
}

module.exports = TestHelpers;
