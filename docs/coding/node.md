---
group: Coding Style
order: 6
---

# Node.js Coding Specification

Node.js 规约主要包含编码风格、安全规约、最佳实践等几个部分，目的是给业务同学提供研发过程中的实质性规范和指导。其中编码风格 follow [eslint-config-egg](https://github.com/eggjs/eslint-config-egg)。

## Supported Node.js versions

Only **Current**, **Active LTS** and **Maintenance LTS** versions are supported. **Unstable** and **EOL** versions are not supported. Odd-numbered (19, 21, 23) versions are NOT recommended for any production projects, because their life time, six month, is too short.

![](https://raw.githubusercontent.com/nodejs/Release/main/schedule.svg)

👉🏻 [Learn more](https://nodejs.org/en/about/previous-releases)

## 1 编码风格

- 1.1 `recommended` 使用 Node.js 内置的全局变量。eslint: [node/prefer-global](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global)

```js
// bad
const { Buffer } = require('buffer');
const b = Buffer.alloc(16);
// good
const b = Buffer.alloc(16);

// bad
const { URL } = require('url');
const u = new URL(s);
// good
const u = new URL(s);

// bad
const { URLSearchParams } = require('url');
const u = new URLSearchParams(s);
// good
const u = new URLSearchParams(s);

// bad
const { TextEncoder } = require('util');
const u = new TextEncoder(s);
// good
const u = new TextEncoder(s);

// bad
const { TextDecoder } = require('util');
const u = new TextDecoder(s);
// good
const u = new TextDecoder(s);

// bad
const process = require('process');
process.exit(0);
// good
process.exit(0);

// bad
const console = require('console');
console.log('hello');
// good
console.log('hello');
```

- 1.2 `recommended` 使用模块内支持的 `promises` API。eslint: [node/prefer-promises](https://github.com/mysticatea/eslint-plugin-node/tree/master/docs/rules/prefer-promises)

Node.js 从 v11.14.0 开始支持 `require('dns').promises` 和 `require('fs').promises` API。

```js
// bad
const dns = require('dns');
const fs = require('fs');

function lookup(hostname) {
  dns.lookup(hostname, (error, address, family) => {
    // ...
  });
}

function readData(filePath) {
  fs.readFile(filePath, 'utf8', (error, content) => {
    // ...
  });
}

// good
const { promises: dns } = require('dns');
const { promises: fs } = require('fs');

async function lookup(hostname) {
  const { address, family } = await dns.lookup(hostname);
  // ...
}

async function readData(filePath) {
  const content = await fs.readFile(filePath, 'utf8');
  // ...
}
```

- 1.3 `recommended` 如无特殊需求，模块引用声明放在文件顶端，注意引用顺序。eslint: [import/order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)

如无特殊需求（如动态 require），模块引用声明需要放在文件顶端。引用顺序如无特殊需求，按以下顺序来引入依赖：node 内置模块、npm 包、本地文件或其他，几类文件代码块之间各空一行，每类文件代码块中的引用顺序按照字典排序，如有解构引用情况，字典序以解构的第一个为准，解构内部按照字典排序。

```js
// bad
const Car = require('./models/car');
const moment = require('moment');
const mongoose = require('mongoose');
const fs = require('fs');
const http = require('http');
const { Foo, Bar } = require('tool');
const note = require('note');

// good
const fs = require('fs');
const http = require('http');

const { Bar, Foo } = require('tool');
const moment = require('moment');
const mongoose = require('mongoose');
const note = require('note');

const Car = require('./models/car');

// bad
import Car from './models/car';
import moment from 'moment';
import mongoose from 'mongoose';
import fs from 'fs';
import http from 'http';
import { Foo, Bar } from 'tool';
import note from 'note';

// good
import fs from 'fs';
import http from 'http';

import { Bar, Foo } from 'tool';
import moment from 'moment';
import mongoose from 'mongoose';
import note from 'note';

import Car from './models/car';
```

- 1.4 `recommended` 抛出异常时，使用原生 `Error` 对象。eslint: [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)

```js
// bad
throw 'error';

throw 0;

throw undefined;

throw null;

const err = new Error();
throw 'an ' + err;

const err = new Error();
throw `${err}`;

// good
throw new Error();

throw new Error('error');

const err = new Error('error');
throw err;

try {
  throw new Error('error');
} catch (err) {
  throw err;
}
```

1.5 `recommended` 线上环境尽量不要使用 `fs/child_process` 模块的 `sync` 方法，如 `fs.readFileSync()`、`cp.execSync()` 等。

这样会阻塞 Node.js 应用的进程，导致不能继续处理新的请求，或当前正在处理的请求超时。推荐使用 `require('fs').promises` 方式或使用 [mz](https://www.npmjs.com/package/mz)。

```js
// bad
const fs = require('fs');

function test() {
  fs.readFileSync('./somefile', 'utf-8');
}

// good
const { promises: fs } = require('fs');

async function test() {
  await fs.readFile('./somefile', 'utf-8');
}

// good
const fs = require('mz/fs');

async function test() {
  await fs.readFile('./somefile', 'utf-8');
}
```

## 2 安全规约

- 2.1 `mandatory` 在客户端隐藏错误详情。

错误提示有可能会暴露出敏感的系统信息，容易被利用去做进一步的攻击。

- 2.2 `mandatory` 隐藏或伪造技术栈和框架标识。

隐藏或伪造 X-Powered-By 响应头，应用广泛的框架多有公开的漏洞，防止标识露出被恶意利用。

- 2.3 `mandatory` JSONP 跨域接口必须严格校验访问来源。

配置域名白名单，防止通过 JSONP 接口获取到敏感信息的风险。

- 2.4 `mandatory` 禁止使用从参数或明文 cookie 中获取的用户标识进行敏感信息查询输出。

防止未授权访问/越权访问。

- 2.5 `mandatory` 防止 SQL 注入。

含有用户输入内容的 SQL 语句必须使用预编译模式。若用户输入无法使用预编译模式(输入为表名/字段名等内容)，需要对用户输入进行转义/过滤之后再拼接到 SQL 中。

- 2.6 `recommended` 定期检查过期依赖和依赖漏洞升级。

检测依赖，对于有漏洞或者过期的依赖要及时升级或替换。

- 2.7 `recommended` 用户上传文件不允许至服务器本地，需要上传到 OSS 等服务。

任意文件上传漏洞，防止用户上传恶意文件，入侵服务器。

- 2.8 `recommended` 服务端 URL 重定向需要设置白名单。

若需要对用户输入内容作为目标 URL 进行重定向，需要对其进行域名白名单校验，不允许跳转至白名单外的域名。

- 2.9 `recommended` 对接口入参严格校验。

使用 [jsonschema](https://www.npmjs.com/package/jsonschema) 或 [joi](https://www.npmjs.com/package/joi) 校验入参，减少意外输入造成的程序报错或崩溃，同时也能减少脏数据形成。

## 3 最佳实践

- 3.1 `recommended` 应用不应该有状态。

使用外部数据存储。保证即使结束某个应用实例也不会影响数据和服务。

- 3.2 `recommended` 尽量不要用 Node.js 应用去托管前端静态文件。

应该把前端静态文件放到 CDN，当静态文件的访问量很大的时候，可能会阻塞其他服务的执行。

- 3.3 `recommended` 把 CPU 密集型任务委托给反向代理。

Node.js 应用不合适做 CPU 密集型任务（例如 gzip，SSL），请尽量把这类任务代理给 nginx 或其他服务。

- 3.4 `recommended` 使用 `async/await`，尽量避免使用回调函数。

`async/await` 可以让你的代码看起来更简洁，可以规避掉回调地狱的问题，并且使异常处理也变得清晰简单。

- 3.5 `recommended` 使用 `util.promisify` 处理回调函数，使其返回 `Promise`。

```js
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}
```

- 3.6 `recommended` 使用 Node.js 原生 `Promise`，而不是三方库如 `bluebird`。

- 3.7 `recommended` 在类方法中返回 `this` 方便链式调用。

```js
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump().setHeight(20);
```

- 3.8 `recommended` 使用 [阿里云 Node.js 性能平台](https://www.aliyun.com/product/nodejs) 作为应用的性能监控工具。

[阿里云 Node.js 性能平台](https://www.aliyun.com/product/nodejs)提供 Node.js 应用性能监控、管理及报警，性能快照远程截取与调优， 安全与依赖更新提示，异常日志与慢 HTTP 日志等功能，能有效帮助开发者监控和排查 Node.js 应用性能问题。

## 配套工具

- [eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali)：本规约配套的 [ESLint](http://eslint.org/) 规则包，可使用 `eslint-config-ali/node` 或 `eslint-config-ali/typescript/node` 引入本文介绍的规则

## 参考资料

- [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- [airbnb javascript style](https://github.com/airbnb/javascript)
