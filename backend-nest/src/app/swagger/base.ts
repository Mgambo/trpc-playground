import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { SwaggerDocumentOptions } from '@nestjs/swagger/dist/interfaces';

/**
 * Base swagger setup
 */
export class SwaggerSetup {
  private readonly prefix: string;
  private readonly app: INestApplication;
  private readonly swaggerDocOptions: SwaggerDocumentOptions;
  private readonly description: string;

  constructor(
    prefix: string,
    app: INestApplication,
    swaggerDocOptions?: SwaggerDocumentOptions,
    description?: string,
  ) {
    this.prefix = prefix;
    this.app = app;
    this.swaggerDocOptions = swaggerDocOptions || {};
    this.description = description || '';
  }

  /**
   * Init swagger
   */
  init() {
    const options = new DocumentBuilder()
      .setTitle('API')
      .setDescription(this.description)
      .setVersion('v0.0.1')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(
      this.app,
      options,
      this.swaggerDocOptions,
    );
    const swaggerCustomOptions: SwaggerCustomOptions = {
      swaggerOptions: {
        tagsSorter: 'alpha',
        operationsSorter: 'alpha',
      },
    };

    SwaggerModule.setup(
      `${this.prefix}docs`,
      this.app,
      document,
      swaggerCustomOptions,
    );
  }
}
