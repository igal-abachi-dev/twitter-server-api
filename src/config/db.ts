import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import { Product } from '../models/index';

async function db (server) {
	try {
		const connectionOptions = await getConnectionOptions();
		Object.assign(connectionOptions, {
			options: { encrypt: true },
			entities: [Product]
		});

		// The DataSource method was introduced in place of createConnection
		//https://levelup.gitconnected.com/datasource-in-typeorm-a-new-way-to-connect-to-your-database-cdc6622f9bbc
		/*
const connectDB =  new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URI,
    logging: false,
    synchronize: true,
    entities: ...
		extra: {
			ssl: {
				rejectUnauthorized: false
			}
		}
	})
*/
		const connection = await createConnection(connectionOptions);
		console.log('database connected');

		server.decorate('db', {
			products: connection.getRepository(Product)
		});
    
	} catch (error) {
		console.log(error);
		console.log('make sure you have set .env variables - see .env.sample');
	}
}

module.exports = db;
