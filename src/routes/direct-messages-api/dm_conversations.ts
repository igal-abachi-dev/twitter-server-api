import {CreateDmConversationRequest} from '../../dto/req/CreateDmConversationRequest';
import {CreateTextMessageRequest} from '../../dto/req/CreateTextMessageRequest';
import {CreateDmEventResponse} from '../../dto/res/CreateDmEventResponse';
import {DmEvent} from '../../models/DmEvent';

async function dm_conversations_Routes (fastify) {//dm_conversations/

	fastify.get('/dm_conversations/with/:participant_id/dm_events', async (req, res) => {//GetDmConversationsWithParticipantIdDmEvents
		req.log.info('Returns DM Events for a DM Conversation');
		//req.params.participant_id
		const products = await fastify.db.products.find();
		res.send([] as DmEvent[]);
		//List<DmEvent> GetDmConversationsWithParticipantIdDmEvents([FromRoute][Required]string participantId)

	});

	fastify.post('/dm_conversations', async (req, res) => {//DmConversationIdCreate
		req.log.info('Creates a new DM Conversation.',req.body as CreateDmConversationRequest);
		const products = await fastify.db.products.save();
		res.send(new CreateDmEventResponse());
		//CreateDmEventResponseData DmConversationIdCreate([FromBody]CreateDmConversationRequest body)
	});
	fastify.post('/dm_conversations/with/:participant_id/messages', async (req, res) => {//DmConversationWithUserEventIdCreate
		req.log.info('Creates a new message for a DM Conversation with a participant user by ID',req.body as CreateTextMessageRequest);
		//req.params.participant_id
		const products = await fastify.db.products.save(req.body);
		res.send(new CreateDmEventResponse());
		//CreateDmEventResponseData DmConversationWithUserEventIdCreate([FromRoute][Required]string participantId, [FromBody]CreateTextMessageRequest body)
	});

}

module.exports = dm_conversations_Routes;
