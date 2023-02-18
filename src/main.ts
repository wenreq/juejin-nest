import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 引入 fastify
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastify from 'fastify';
// import { VersioningType } from '@nestjs/common';
// 请求有多个版本时
import {
  ValidationPipe,
  VersioningType,
  VERSION_NEUTRAL,
} from '@nestjs/common';
// 引入封装好的全局响应拦截器 ts 文件
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
// 添加 useGlobalFilters 全局过滤器
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';
import { HttpExceptionFilter } from './common/exceptions/http.exception.filter';
// swagger 文档
import { generateDocument } from './doc';
// 日志
import { FastifyLogger } from './common/logger';

declare const module: any;

async function bootstrap() {
  // fastify 实例
  const fastifyInstance = fastify({
    logger: FastifyLogger,
  });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(fastifyInstance),
  );

  // 统一响应体格式
  app.useGlobalInterceptors(new TransformInterceptor());

  // 全局异常拦截
  // 这里一定要注意引入自定义异常的先后顺序，不然异常捕获逻辑会出现混乱。
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

  // 接口版本化管理
  app.enableVersioning({
    // defaultVersion: '1', // 全局配置请求控制
    // defaultVersion: [VERSION_NEUTRAL, '1', '2'],
    type: VersioningType.URI,
  });

  // 启动全局字段校验，保证请求接口字段校验正确
  app.useGlobalPipes(new ValidationPipe());

  // 创建文档
  generateDocument(app);

  // 开启 HMR 功能
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  await app.listen(3000);
}
bootstrap();
