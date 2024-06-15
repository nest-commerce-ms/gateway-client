import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Response } from 'express';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse();
    const rcpError = exception.getError();

    if (typeof rcpError === 'object' && 'status' in rcpError) {
      response.status(rcpError.status as number).json(rcpError);
    }

    response.status(400).json({
      status: 400,
      message: rcpError,
    });
  }
}
