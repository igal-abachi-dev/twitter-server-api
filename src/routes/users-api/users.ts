async function productRoutes (fastify) {
	fastify.get('/:_id', async (req, res) => {
		req.log.info('get one products from db');
		const product = await fastify.db.products.findOne(req.params._id);
		res.send(product);
	});

	fastify.get('/', async (req, res) => {
		req.log.info('list products from db');
		const products = await fastify.db.products.find();
		res.send(products);
	});

	fastify.post('/', async (req, res) => {
		req.log.info('Add products to db');
		const products = await fastify.db.products.save(req.body);
		res.status(201).send(products);
	});

	fastify.put('/:_id', async (req, res) => {
		req.log.info('Update product to db');
		const _id = req.params._id;
		const products = await fastify.db.products.save({ _id, ...req.body });
		res.status(200).send(products);
	});

	fastify.delete('/:_id', async (req, res) => {
		req.log.info(`delete product ${req.params._id} from db`);
		const product = await fastify.db.products.findOne(req.params._id);
		await fastify.db.products.remove(product);
		res.code(200).send({});
	});
}

module.exports = productRoutes;

/*

User lookup by IDs
    GET /users?ids=1346889436626259968,1346889436626259968
List<User> FindUsersById([FromQuery][Required()]List<string> ids)


User lookup by ID
    GET /users/{id}
User FindUserById([FromRoute][Required]string id)

Unfollow User
    DELETE /users/{source_user_id}/following/{target_user_id}
ListFollowedResponseData UsersIdUnfollow([FromRoute][Required]string sourceUserId, [FromRoute][Required]string targetUserId)

Followers by User ID
    GET /users/{id}/followers
List<User> UsersIdFollowers([FromRoute][Required]string id)

Following by User ID
    GET /users/{id}/following
List<User> UsersIdFollowing([FromRoute][Required]string id)

Follow User
    POST /users/{id}/following
ListFollowedResponseData  UsersIdFollow([FromRoute][Required]string id, [FromBody]UsersFollowingCreateRequest body)



*/