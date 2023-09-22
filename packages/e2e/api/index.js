const helper = require('../drivers/DetoxTestDriver');

module.exports = {
  waitAndTap(elementId, timeout, index) {
    return global.instance
      ? global.instance.waitAndTap(elementId, timeout, index)
      : helper.waitAndTap(elementId, timeout, index);
  },
  waitAndTapText(elementId, text, timeout) {
    return global.instance
      ? global.instance.waitAndTapText(elementId, text, timeout)
      : helper.waitAndTapText(elementId, text, timeout);
  },
  delay(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  },
  checkIfElementByTextIsVisible(text) {
    return global.instance
      ? global.instance.checkIfElementByTextIsVisible(text)
      : helper.checkIfElementByTextIsVisible(text);
  },
  checkIfElementHasString(elementId, text) {
    return global.instance
      ? global.instance.checkIfElementHasString(elementId, text)
      : helper.checkIfElementHasString(elementId, text);
  },
  relaunchApp() {
    return global.instance
      ? global.instance.relaunchApp()
      : helper.relaunchApp();
  },
  disableSynchronization() {
    return global.instance
      ? global.instance.disableSynchronization()
      : helper.disableSynchronization();
  },
};
