import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class Follow {
	@PrimaryGeneratedColumn('uuid')
	_id: string

	@Column()
	source_user_id: string;

	@Column()
	target_user_id: string;

	@Column()
	target_user_notified: boolean;

	@CreateDateColumn()
	created_at: string

	@Column()
	latest_tweet_id_read: string
}
