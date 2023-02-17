import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { getConfig } from '../utils';

@Module({
  // 1. 在使用自定义 YAML 配置文件之前，先要修改 app.module.ts 中 ConfigModule 的配置项 ignoreEnvFile，禁用默认读取 .env 的规则
  // 2. 然后再安装 YAML 的 Node 库 yaml `yarn add yaml`
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig], // 注意：load 方法中传入的 getConfig 是一个函数，并不是直接 JSON 格式的配置对象，直接添加变量会报错。
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
