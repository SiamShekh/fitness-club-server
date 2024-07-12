import env from 'dotenv';
import path from 'path';

env.config({ path: path.join(process.cwd(), '.env') });

const envoroments = {
    port: process.env.PORT,
    mongodb: process.env.MONGODB
};

export default envoroments;
