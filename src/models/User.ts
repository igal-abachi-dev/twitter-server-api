import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn('uuid')
	_id: string;

	@Column()
	username: string;//*

	@Column()
	name: string;//friendly name

	@Column()
	description: string;

	@Column()
	profile_image_url: string;

	@Column()
	protected: boolean;//tweets are private

	@Column()
	verified: boolean;

	@CreateDateColumn()
	created_at: string;

	@Column()
	birth_day: number;

	@Column()
	birth_month: number;

	@Column()
	birth_year: number;//*
}

//password hash , salt
