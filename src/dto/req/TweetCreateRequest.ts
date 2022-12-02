import {TweetCreateRequestReply} from './TweetCreateRequestReply';

export class TweetCreateRequest {
	quote_tweet_id:string;
	reply:TweetCreateRequestReply;
	text:string;
}
