import express from 'express';

const service = express();

service.listen(4000, () => console.log('Web Service running...'));