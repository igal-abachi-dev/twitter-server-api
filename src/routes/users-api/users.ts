import {User} from '../../models/User';
import {FollowedResponse} from '../../dto/res/FollowedResponse';
import {UsersFollowingCreateRequest} from '../../dto/req/UsersFollowingCreateRequest';

async function users_api_users_Route (fastify) {
	fastify.get('/users/:_id', async (req, res) => {//FindUserById
		req.log.info('User lookup by ID');
		const product = await fastify.db.products.findOne(req.params._id);
		res.send(new User());
		//User FindUserById([FromRoute][Required]string id)
	});

	fastify.get('/users/', async (req, res) => {//FindUsersById
		req.log.info('User lookup by IDs',req.query?.ids);
		//GET /users?ids=1346889436626259968,1346889436626259968
		const products = await fastify.db.products.find();
		res.send([] as User[]);
		//List<User> FindUsersById([FromQuery][Required()]List<string> ids)
	});

	fastify.get('/users/:_id/followers', async (req, res) => {//UsersIdFollowers
		req.log.info('Followers by User ID',req.params?._id);
		const products = await fastify.db.products.find();
		res.send([] as User[]);
		//List<User> UsersIdFollowers([FromRoute][Required]string id)
	});

	fastify.get('/users/:_id/following', async (req, res) => {//UsersIdFollowing
		req.log.info('Following by User ID',req.params?._id);
		const products = await fastify.db.products.find();
		res.send([] as User[]);
		//List<User> UsersIdFollowing([FromRoute][Required]string id)
	});

	fastify.post('/users/:_id/following', async (req, res) => {//UsersIdFollow
		req.log.info('Follow User', req.body as UsersFollowingCreateRequest);
		const products = await fastify.db.products.save(req.body);
		res.status(200).send(new FollowedResponse());
		//ListFollowedResponseData  UsersIdFollow([FromRoute][Required]string id, [FromBody]UsersFollowingCreateRequest body)
	});

	fastify.delete('/users/:_id/following/:_target', async (req, res) => {//UsersIdUnfollow
		req.log.info(`Unfollow User ${req.params._target}`);
		const product = await fastify.db.products.findOne(req.params._id);
		await fastify.db.products.remove(product);
		res.code(200).send(new FollowedResponse());
		//ListFollowedResponseData UsersIdUnfollow([FromRoute][Required]string sourceUserId, [FromRoute][Required]string targetUserId)
	});
}

module.exports = users_api_users_Route;
