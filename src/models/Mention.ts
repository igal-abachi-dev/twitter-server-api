import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class Mention {
	@PrimaryGeneratedColumn('uuid')
	_id: string

	@Column()
	username: string//*

	@Column()
	target_user_notified: boolean;

	@Column()
	tweet_author: string

	@Column()
	tweet_id: string//*
}

// @username