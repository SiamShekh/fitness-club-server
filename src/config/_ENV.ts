import env from 'dotenv';
import path from 'path';

env.config({ path: path.join(process.cwd(), '.env') });

const envoroments = {
    port: process.env.PORT,
    mongodb: process.env.MONGODB,
    salt: process.env.SALT,
    accessScrect: process.env.ACCESS_SECRECT,
    accessExpire: process.env.ACCESS_EXPIRE
};

export default envoroments;
