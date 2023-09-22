/* eslint-disable no-return-await */
const { Builder, Browser, until, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

class TestDriver {
  constructor(config) {
    this.config = config;
    this.driver = null;
  }

  static getInstance(config) {
    if (!this._instance) {
      this._instance = new TestDriver(config);
    }
    return this._instance;
  }

  async init() {
    const options = new chrome.Options();
    options.addArguments('--lang=en');

    this.driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  }

  async quit() {
    await this.driver.quit();
  }

  async clickByText(text) {
    const xpath = `//*[text()='${text}']`;
    await this.driver.findElement(By.xpath(xpath)).click();
  }

  async waitForText(text, timeout) {
    const xpath = `//*[text()='${text}']`;
    await this.driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
  }

  async checkIfElementByTextIsVisible(text) {
    try {
      const element = await this.driver.findElement(
        By.xpath(`//*[text()='${text}']`),
      );
      return await element.isDisplayed();
    } catch (e) {
      return new Promise((resolve) => {
        resolve(false);
      });
    }
  }

  async waitAndTapText(elementId, text, timeout) {
    const inputElement = await this.findElementById(elementId);
    await this.waitElement(elementId, timeout);
    // 获取焦点
    await this.clickElement(inputElement);
    await this.inputTextByElement(inputElement, text);
  }

  async waitElement(elementId, timeout) {
    await this.driver.wait(
      until.elementLocated(By.xpath(`//*[@data-testid='${elementId}']`)),
      timeout,
    );
  }

  async clickElement(element) {
    await element.click();
  }

  async inputTextByElement(element, text) {
    await element.sendKeys(text);
  }

  async findElementById(elementId) {
    const xpath = `//*[@data-testid='${elementId}']`;
    return await this.driver.findElement(By.xpath(xpath));
  }

  async waitAndTap(elementId, timeout) {
    const inputElement = await this.findElementById(elementId);
    await this.waitElement(elementId, timeout);
    // 获取焦点
    await this.clickElement(inputElement);
  }

  async relaunchApp() {
    await this.driver.get(this.config.configurations.index);
  }

  async disableSynchronization() {
    return Promise.resolve();
  }
}

module.exports = TestDriver;
