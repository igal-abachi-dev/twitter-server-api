import {User} from '../../models/User';

async function users_api_tweets_Routes (fastify) {
	fastify.get('/tweets/:_id/retweeted_by', async (req, res) => {//TweetsIdRetweetingUsers
		req.log.info('User objects that have retweeted the provided Tweet ID');
		const product = await fastify.db.products.findOne(req.params._id);
		res.send([] as User[]);
		//List<User> TweetsIdRetweetingUsers([FromRoute][Required]string id)
	});
	fastify.get('/tweets/:_id/liking_users', async (req, res) => {//TweetsIdLikingUsers
		req.log.info('User objects that have liked the provided Tweet ID');
		const product = await fastify.db.products.findOne(req.params._id);
		res.send([] as User[]);
		//List<User> TweetsIdLikingUsers([FromRoute][Required]string id)
	});
}

module.exports = users_api_tweets_Routes;
