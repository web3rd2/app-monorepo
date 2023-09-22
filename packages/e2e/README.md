# e2e-framework

一个统一的端到端（E2E）测试框架，支持 React Native 和 Web 项目。

## 特性

- 支持 React Native 和 Web 两种平台
- CLI 支持，命令行运行测试
- 支持通配符匹配多个测试用例文件
- app 使用 detox 执行测试，web 使用 selenium-webdriver

## 安装

在你的项目中运行以下命令来安装 `@onekey/e2e`：

```bash
yarn add @onekey/e2e
```

或

```bash
npm install @onekey/e2e
```

## 使用方法

### CLI 使用

```bash

# 运行移动端测试用例

@onekeyhq/e2e/cli/index.js run --platform=web --config="e2e.config.js" --test-cases="e2e/\*.e2e.js"

# 运行 Web 端测试用例

@onekeyhq/e2e/cli/index.js run --platform=mobile --config="e2e.config.js" --test-cases="e2e\*.e2e.js"
```

### API 使用

测试用例文件中：

```javascript
/_ eslint-disable no-undef _/;

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
  // await expect(element(by.id('create_wallet'))).toBeVisible();
  // });

  it('create wallet', async () => {
    await disableSynchronization();
    await delay(5000);

    await waitAndTap('create_wallet', 5000);
    await waitAndTapText('password', 'Hello, World!', 5000);
    await waitAndTapText('confirmPassword', 'Hello, World!', 5000);
    await delay(5000);
    await waitAndTap('continue', 5000);

    await checkIfElementByTextIsVisible('Recovery Phrase');
  });
});
```

## 文件结构

```plaintext
e2e/
|-- cli/
| |-- index.js # CLI 入口文件
| |-- commands/ # 存放 CLI 命令的目录
| | |-- mobileRunner.js # Detox 运行器
| | |-- webRunner.js # selenium-webdriver 测试用例执行，mocha实现
| | |-- run.js # 'run' 命令的实现
|-- drivers/
| |-- WebTestDriver.js #  封装 WebDriver类，实现 api 接口
| |-- DetoxTestDriver.js # Detox 测试api封装，实现 api 接口
|-- api/
| |-- index.js # 对外暴露的 API
| |-- testEnvPatch.js # mocha before = jest beforeall
|-- package.json # 项目的 package.json 文件
|-- README.md # 项目文档
```

## 贡献

欢迎任何形式的贡献和建议。

## 许可

本项目使用 MIT 许可。

```

```
