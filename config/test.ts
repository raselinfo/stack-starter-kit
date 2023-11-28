import dotenv from 'dotenv';

dotenv.config();
export default {
  port: process.env.PORT,
  mode: 'test',
  name: 'raselTest',
};
