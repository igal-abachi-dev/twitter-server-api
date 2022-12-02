import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';
import {TweetReferenceTypeEnum} from '../dto/enums/TweetReferenceTypeEnum';

@Entity()
export class TweetReference {
	@PrimaryGeneratedColumn('uuid')
	_id: string; //child tweet links to it

	@Column()
	tweet_id: string;//parent tweet

	@Column()
	tweet_author_notified: boolean;

	@Column()
	type: TweetReferenceTypeEnum;
}

//Replies
//Retweets
// Quote Tweets
//   Retweets of Quoted Tweets