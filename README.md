<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## 项目文件介绍

文件名|文件描述
---|---
app.controller.ts|常见功能是用来处理http请求以及调用service层的处理方法
app.module.ts|根模块用于处理其他类的引用与共享
app.services.ts|封装通用的业务逻辑、与数据层的交互（例如数据库）、其他额外的一些三方请求
main.ts|应用程序入口文件。它使用 NestFactory来创建 Nest 应用实例。

## 配置：基础功能配置

### Fastify

`Fastify` 与其他主流 `HTTP` 框架对比，其在 **QPS(并发处理请求)**的效率上要远超其他框架，达到了几乎两倍的基准测试结果，所以在网关系统这个对性能要求非常高的项目中使用 `Fastify` 无疑是一种非常好的选择。

在 main.js 中进行引入和改造。

### 版本控制

#### 当个请求控制

```ts
// main.ts
// 接口版本化管理
app.enableVersioning({
  type: VersioningType.URI,
});
```

### 统一响应体格式

useGlobalInterceptors

### 全局异常拦截

useGlobalFilters

### 环境变量

自带环境变量：

1. 安装 `pnpm add @nestjs/config`
2. 安装完毕之后，在 `app.module.ts` 中添加 `ConfigModule` 模块
3. 自定义 YAML `pnpm add yaml`
4. 使用自定义配置 `pnpm add cross-env`

### 热重载

1. 安装依赖：`pnpm add webpack-node-externals run-script-webpack-plugin webpack`
2. 新建 `webpack-hmr.config.js` 文件

### 文档

1. 安装依赖：`pnpm add @nestjs/swagger` 新版本已经不需要安装 fastify-swagger 依赖，默认被内置在 @nestjs/swagger 中了。
2. 依赖安装完毕之后，先创建 src/doc.ts 文件
