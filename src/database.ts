import mongoose, {ConnectOptions} from 'mongoose'
import config from './config'
(async () => {
    try {
        const mongOpts: ConnectOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            /*user: config.MONGO_USER,
            pass: config.MONGO_PASSWORD*/
        }
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongOpts)
        console.log('Database is connected to: ', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()