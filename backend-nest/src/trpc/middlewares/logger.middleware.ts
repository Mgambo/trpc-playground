/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, Logger } from '@nestjs/common';
import { MiddlewareOptions, TRPCMiddleware } from 'nestjs-trpc';
import { IAppContext } from '../context/context.interface';

@Injectable()
export class LoggerMiddleware implements TRPCMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  async use(opts: MiddlewareOptions<IAppContext>) {
    const start = Date.now();
    const { next, path, type } = opts;
    const result = await next();

    const { req, res } = opts.ctx;
    const meta = {
      path,
      type,
      durationMs: Date.now() - start,
      method: req.method,
      statusCode: res.statusCode,
      ip: req.ip,
      headers: req.headers,
    };

    result.ok
      ? this.logger.log('Success', meta)
      : this.logger.error('Error', meta);

    return result;
  }
}
