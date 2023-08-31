import 'dotenv/config';

import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/shared/database/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
