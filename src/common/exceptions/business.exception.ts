// 处理业务运行中预知且主动抛出的异常
// 自定义业务异常的优点在于，当你的业务逻辑复杂到一定的地步，在任意的一处出现可预知的错误，此时可以直接抛出异常让用户感知，不需要写很多冗余的返回代码。
import { HttpException, HttpStatus } from '@nestjs/common';
import { BUSINESS_ERROR_CODE } from './business.error.codes';

type BusinessError = {
  code: number;
  message: string;
};

export class BusinessException extends HttpException {
  constructor(err: BusinessError | string) {
    if (typeof err === 'string') {
      err = {
        code: BUSINESS_ERROR_CODE.COMMON,
        message: err,
      };
    }
    super(err, HttpStatus.OK);
  }

  static throwForbidden() {
    throw new BusinessException({
      code: BUSINESS_ERROR_CODE.ACCESS_FORBIDDEN,
      message: '抱歉哦，您无此权限！',
    });
  }
}
