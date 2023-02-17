import {
  Controller,
  Version,
  VERSION_NEUTRAL,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BusinessException } from 'src/common/exceptions/business.exception';
import { ConfigService } from '@nestjs/config';

// @Controller('user')
// 全局配置请求控制
// @Controller({
//   path: 'user',
//   version: '1',
// })

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Get('getTestName')
  getTestName() {
    console.log(this.configService.get('TEST_VALUE'));
    return this.configService.get('TEST_VALUE').name;
  }

  // /user/findError 503
  @Get('findError')
  // @Version([VERSION_NEUTRAL, '1'])
  findError() {
    const a: any = {};
    console.log(a.b.c);
    return this.userService.findAll();
  }

  // /user/findBusinessError
  @Get('findBusinessError')
  // @Version([VERSION_NEUTRAL, '1'])
  findBusinessError() {
    const a: any = {};
    try {
      console.log(a.b.c);
    } catch (error) {
      throw new BusinessException('你这个参数错了');
    }
    return this.userService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  // 启用版本配置之后再在 Controller 中请求方法添加对应的版本号装饰器
  // http://localhost:3000/v1/user
  // @Version('1') // 单个请求版本控制
  // @Version([VERSION_NEUTRAL, '1']) // /user /v1/user
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  // @Version('2') // /v2/user/1
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
