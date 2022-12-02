import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class Like {
	@PrimaryGeneratedColumn('uuid')
	_id: string;

	@Column()
	tweet_id: string;

	@Column()
	target_user_notified: boolean;

	@Column()
	user_id: string;

	@CreateDateColumn()
	created_at: string;
}
