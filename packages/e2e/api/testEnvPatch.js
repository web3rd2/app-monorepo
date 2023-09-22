let beforeAll;

if (typeof global.jest !== 'undefined') {
  // Jest 环境
  beforeAll = global.beforeAll;
} else {
  // Mocha 环境
  beforeAll = global.before;
}

module.exports = { beforeAll };
