import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class TweetEditControls {
	@PrimaryGeneratedColumn('uuid')
	_id: string;

	@Column()
	tweet_id: string;

	@CreateDateColumn()
	editable_until: string;//*

	@Column()
	edits_remaining: number;//*

	@Column()
	is_edit_eligible: boolean;//*

}
