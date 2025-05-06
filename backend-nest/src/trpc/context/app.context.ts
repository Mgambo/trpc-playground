/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { ContextOptions, TRPCContext } from 'nestjs-trpc';

@Injectable()
export class AppContext implements TRPCContext {
  create(opt: ContextOptions) {
    return {
      req: opt.req,
      res: opt.res,
    };
  }
}
