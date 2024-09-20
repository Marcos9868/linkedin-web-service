import express from 'express';
import cors from 'cors';
import sequelize from './config/sequelize/sequelize.config';

(async () => {
    try {
      await sequelize.authenticate();
      const service = express();
      service.use(cors());
      service.use(express.json());
      service.use(express.urlencoded({ extended: true }));
      service.listen(4000, () => console.log('Web Service running...'));
      console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
      process.exit(1);
    } 
})();