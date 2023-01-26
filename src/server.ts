//import * as zlib from 'zlib';

const fastify = require('fastify')({ logger: true });
const db = require('../src/config/db');

const createServer  = async () => {

	await db(fastify);

	await fastify.register(require('fastify-cors'),
		{
		origin:true,
			methods:['GET', 'PUT', 'POST'],
			allowedHeaders:true,
			credentials:true,
			preflightContinue:true,
			preflight:false,
	});

// fastify.register(
//     import('@fastify/compress'),
//     { global: true }
// );
/*

fastify.register(fastifyCompress, {
  zlibOptions: {
    flush: zlib.constants.Z_SYNC_FLUSH,
  },
  brotliOptions: {
    flush: zlib.constants.BROTLI_OPERATION_FLUSH,
  },
});
 */
	//import markoPlugin from "@marko/fastify";
	//app.register(markoPlugin);
	//@marko/tags-api-preview


	await fastify.register(require('../src/routes/health'), { prefix: '/health' });//no prefix
	await fastify.register(require('../src/routes/product'), { prefix: '/product' });

	//https://api.twitter.com/2
	// tweets-api , users-api , direct-messages-api (dm_conversations)


	fastify.setErrorHandler((error, req, res) => {
		req.log.error(error.toString());
		res.send({ error });
	});

	return fastify;
};

module.exports = createServer;





/*
use nginx micro cache 1-2s
pm2:
npx pm2 start ./app.js -f -i max
npx pm2 stop ./app.js
npx pm2 monit
*/

