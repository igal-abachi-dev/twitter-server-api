import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class Tweet {
	@PrimaryGeneratedColumn('uuid')
	_id: string;

	@Column()
	author_id: string;//user

	@Column()
	conversation_id: string;

	@Column()
	in_reply_to_user_id: string;

	@Column()
	text: string;//*  , < 420 char ,  utf8, const invalidCharsGroup = /\uFFFE\uFEFF\uFFFF/;

	//FFFE NONCHARACTER
	//FEFF ZERO WIDTH NO-BREAK SPACE
	//FFFF NONCHARACTER

	@Column()
	edit_controls: string;  ///??? id

	@Column()
	edit_history_tweet_ids: string[];

	//@Column()
	//entities: string;///??? dto only

	@Column()
	lang: string;//BCP47 tag

	@Column()
	possibly_sensitive: boolean;

	@Column()
	long_tweet: boolean; // >420 char , short is < 280 char

	@Column()
	archived:boolean;//older than 7 days

	@Column()
	public_metrics: string;///??? id

	@Column()
	referenced_tweets:string;///??? id

	@Column()
	source: string;//app / device

	@CreateDateColumn()
	created_at: string;

}
