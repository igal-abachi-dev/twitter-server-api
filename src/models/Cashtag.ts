import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class Cashtag {
	@PrimaryGeneratedColumn('uuid')
	_id: string

	@Column()
	tag: string//*

	@Column()
	tweet_id: string//*
}

// $TWTR