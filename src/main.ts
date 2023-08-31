import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as basicAuth from 'express-basic-auth';

const SWAGGER_ENVS = ['local', 'dev', 'staging'];
const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  if (SWAGGER_ENVS.includes(process.env.NODE_ENV)) {
    app.use(
      ['/api', '/docs', '/docs-json'],
      basicAuth({
        challenge: true,
        users: {
          [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
        },
      }),
    );

    const config = new DocumentBuilder()
      .setTitle('Desafio Nest.js - DR Consulta')
      .setDescription(
        'O intuito desta API é gerenciar um sistema de estacionamentos, permitindo que veículos entrem no mesmo, mas só saiam com alguns critérios. Este desafio me foi passado por um Tech Lead da empresa Dr. Consulta, onde minhas habilidades de código e lógica serão avaliadas',
      )
      .setVersion('1.0')
      .addTag('authentication')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(port);
}
bootstrap();
