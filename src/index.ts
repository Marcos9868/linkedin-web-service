import express from 'express';
import cors from 'cors';

const service = express();

service.use(cors());
service.use(express.json());
service.use(express.urlencoded({ extended: true }));

service.listen(4000, () => console.log('Web Service running...'));