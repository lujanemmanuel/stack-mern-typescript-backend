import dotenv from 'dotenv'
dotenv.config();
export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'video-collection',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || '127.0.0.1',
    PORT: process.env.PORT || 2500
}