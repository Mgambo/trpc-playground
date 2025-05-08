import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RestLoggerMiddleware implements NestMiddleware {
  private logger = new Logger(RestLoggerMiddleware.name);
  use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();
    const { method, originalUrl, ip } = req;

    // Log request start
    this.logger.log(
      `[${new Date().toISOString()}] ${method} ${originalUrl} - IP: ${ip}`,
    );

    // Log request body if it exists
    if (req.body && Object.keys(req.body).length > 0) {
      this.logger.log('Request Body:', JSON.stringify(req.body, null, 2));
    }

    // Log response
    res.on('finish', () => {
      const duration = Date.now() - startTime;
      this.logger.log(
        `[${new Date().toISOString()}] ${method} ${originalUrl} - Status: ${res.statusCode} - Duration: ${duration}ms`,
      );
    });

    next();
  }
}
