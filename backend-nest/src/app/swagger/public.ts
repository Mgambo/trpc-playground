import { INestApplication } from '@nestjs/common';

import { SwaggerSetup } from './base';
import { RestModule } from 'src/app/rest/rest.module';

/**
 * Setup public swagger page
 * @param app
 * @param logger
 * @param description
 */
export const setup = (app: INestApplication, description?: string) => {
  const baseConfig = new SwaggerSetup(
    '',
    app,
    {
      include: [RestModule],
      deepScanRoutes: true,
    },
    description,
  );

  try {
    baseConfig.init();
    console.info('Public swagger is running on: /docs');
  } catch (e) {
    console.error(e);
  }
};
