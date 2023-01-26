import {LikedResponse} from '../../dto/res/LikedResponse';
import {RetweetedResponse} from '../../dto/res/RetweetedResponse';
import {Tweet} from '../../models/Tweet';

async function productRoutes (fastify) {
	fastify.get('/users/:_id', async (req, res) => {
		req.log.info('get one products from db');
		const product = await fastify.db.products.findOne(req.params._id);
		res.send([] as Tweet[]);
	});

	fastify.get('/users/', async (req, res) => {
		req.log.info('list products from db');
		const products = await fastify.db.products.find();
		res.send([] as Tweet[]);
	});

	fastify.get('/users/', async (req, res) => {
		req.log.info('list products from db');
		const products = await fastify.db.products.find();
		res.send([] as Tweet[]);
	});

	fastify.post('/users/', async (req, res) => {
		req.log.info('Add products to db');
		const products = await fastify.db.products.save(req.body);
		res.status(200).send(new LikedResponse());
	});

	fastify.post('/users/', async (req, res) => {
		req.log.info('Add products to db');
		const products = await fastify.db.products.save(req.body);
		res.status(200).send(new RetweetedResponse());
	});

	fastify.delete('/users/:_id/likes/:tweet_id', async (req, res) => {//UsersIdUnlike
		req.log.info(`unlike the specified Tweet ${req.params.tweet_id} from db  ${req.params._id}`);
		const product = await fastify.db.products.findOne(req.params._id);
		await fastify.db.products.remove(product);
		res.code(200).send(new LikedResponse());
		//UsersLikesCreateResponseData UsersIdUnlike([FromRoute][Required]string id, [FromRoute][Required]string tweetId)
	});

	fastify.delete('/users/:_id/retweets/:source_tweet_id', async (req, res) => {//UsersIdUnretweets
		req.log.info(`unretweet the specified Tweet ${req.params.source_tweet_id} from db`);
		const product = await fastify.db.products.findOne(req.params._id);
		await fastify.db.products.remove(product);
		res.code(200).send(new RetweetedResponse());
		//UsersRetweetsCreateResponseData UsersIdUnretweets([FromRoute][Required]string id, [FromRoute][Required]string sourceTweetId)
	});
}

module.exports = productRoutes;


/*

Tweet objects liked by the provided User ID
    GET /users/{id}/liked_tweets
List<Tweet> UsersIdLikedTweets([FromRoute][Required]string id)



User mention timeline by User ID
    GET /users/{id}/mentions
List<Tweet> UsersIdMentions([FromRoute][Required]string id)

User Tweets timeline by User ID
    GET /users/{id}/tweets
List<Tweet> UsersIdTweets([FromRoute][Required]string id)


like the specified Tweet
    POST /users/{id}/likes
UsersLikesCreateResponseData UsersIdLike([FromRoute][Required]string id, [FromBody]UsersLikesCreateRequest body)


retweet the specified Tweet.
    POST /users/{id}/retweets
UsersRetweetsCreateResponseData UsersIdRetweets([FromRoute][Required]string id, [FromBody]UsersRetweetsCreateRequest body)

*/