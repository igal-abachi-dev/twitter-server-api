import {CreateTextMessageRequest} from './CreateTextMessageRequest';

export class CreateDmConversationRequest {
	message:CreateTextMessageRequest;//*
	participant_ids:string[];
}