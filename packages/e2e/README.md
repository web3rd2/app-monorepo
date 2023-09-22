# e2e-framework

一个统一的端到端（E2E）测试框架，支持 React Native 和 Web 项目。

## 特性

- 支持 React Native 和 Web 两种平台
- CLI 支持，方便命令行运行测试
- 支持通配符匹配多个测试用例文件

## 安装

在你的项目中运行以下命令来安装 `e2e-framework`：

\`\`\`bash
yarn add e2e-framework
\`\`\`

或

\`\`\`bash
npm install e2e-framework
\`\`\`

## 使用方法

### CLI 使用

\`\`\`bash

# 运行移动端测试用例

e2e-framework run --platform=mobile --test-cases=path/to/testCases.js

# 运行 Web 端测试用例

e2e-framework run --platform=web --test-cases=path/to/testCases.js

# 使用通配符运行多个测试用例文件

e2e-framework run --platform=web --test-cases=path/to/\*.e2e.js
\`\`\`

### API 使用

在你的测试用例文件中：

\`\`\`javascript
const { TestDriver } = require('e2e-framework');

const testDriver = new TestDriver();

module.exports = {
testButtonClick: async () => {
await testDriver.clickById('buttonId');
},
testInput: async () => {
await testDriver.typeTextById('inputId', 'Hello, world!');
},
// 其他测试用例
};
\`\`\`

## 文件结构

\`\`\`plaintext
e2e-framework/
|-- cli/
| |-- index.js # CLI 入口文件
| |-- commands/ # 存放 CLI 命令的目录
| | |-- run.js # 'run' 命令的实现
|-- drivers/
| |-- TestDriver.js # 封装 Detox 和 WebDriver 的类
|-- api/
| |-- index.js # 对外暴露的 API
|-- package.json # 项目的 package.json 文件
|-- README.md # 项目文档
\`\`\`

## 贡献

欢迎任何形式的贡献和建议。

## 许可

本项目使用 MIT 许可。
