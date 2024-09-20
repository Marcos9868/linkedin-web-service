import { Sequelize } from 'sequelize';
import { databaseConfig } from '../database/postgres.config';

export const sequelize = new Sequelize({
  ...databaseConfig,
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production', 
  },
  define: {},
});

export default sequelize;