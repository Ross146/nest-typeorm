require("dotenv").config();

import {Logger} from "@nestjs/common";
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {getDbConnectionOptions, runDbMigrations} from "@shared/utils";

const port = process.env.PORT || 3000;

async function bootstrap() {
  const connectionOptions = await getDbConnectionOptions(process.env.NODE_ENV);

  const app = await NestFactory.create(AppModule.forRoot(connectionOptions));

  await runDbMigrations();
  await app.listen(port);
  Logger.log(`Server started running on http://localhost:${port}`, 'Bootstrap');
}

bootstrap();
