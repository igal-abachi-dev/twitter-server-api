import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class UserMetrics {
	@PrimaryGeneratedColumn('uuid')
	_id: string;

	@Column()
	user_id: string;

	@Column()
	following_count: number;//*

	@Column()
	followers_count: number;//*

	@Column()
	tweet_count:number;//*

	@Column()
	like_count: number;

	@Column()
	profile_visit_count: number;//views

	@CreateDateColumn()
	last_online_visit: string;//to fetch timeline for new items since last visit
}
