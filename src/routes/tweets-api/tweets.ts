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

Tweet lookup by Tweet IDs
    GET /tweets?ids=1346889436626259968,1346889436626259968
List<Tweet> FindTweetsById([FromQuery][Required()]List<string> ids)


Tweet lookup by Tweet ID
    GET /tweets/{id}
Tweet FindTweetById([FromRoute][Required]string id)


Tweet delete by Tweet ID
    DELETE /tweets/{id}
TweetDeleteResponseData DeleteTweetById([FromRoute][Required]string id)

Creation of a Tweet under the authorized account.(jwt bearer)
    POST /tweets
TweetCreateResponseData CreateTweet([FromBody]TweetCreateRequest body)



Retrieve Tweets that quote a Tweet.
    GET /tweets/{id}/quote_tweets
List<Tweet> FindTweetsThatQuoteATweet([FromRoute][Required]string id)



Full-archive search
    GET /tweets/search/all?query=
 List<Tweet> TweetsFullarchiveSearch([FromQuery][Required()][StringLength(4096, MinimumLength=1)string query,
[FromQuery]DateTime? startTime, [FromQuery]DateTime? endTime, [FromQuery][Range(10, 500)]int? maxResults,  [FromQuery]string sortOrder)
 


Recent search(7 days)
    GET /tweets/search/recent?query=
List<Tweet> TweetsRecentSearch([FromQuery][Required()][StringLength(4096, MinimumLength=1)string query)


*/