import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class TweetMetrics {
	@PrimaryGeneratedColumn('uuid')
	_id: string;

	@Column()
	tweet_id: string;

	@Column()
	like_count: number;//*

	@Column()
	view_count: number;//  Impressions

	@Column()
	quote_count: number;

	@Column()
	reply_count: number;//*

	@Column()
	retweet_count: number;//*
}
