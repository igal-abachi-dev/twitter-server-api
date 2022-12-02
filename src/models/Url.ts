import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class Url {
	@PrimaryGeneratedColumn('uuid')
	_id: string

	@Column()
	url: string//*

	@Column()
	title: string

	@Column()
	description: string

	//img

	@Column()
	tweet_id: string//*
}

// http://www.sdfsdfdsf.com