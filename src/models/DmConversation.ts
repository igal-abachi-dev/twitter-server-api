import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class DmConversation {
	@PrimaryGeneratedColumn('uuid')
	_id: string;

	@Column()
	participant_ids: string[];


//RSA-OEAP MGF1 8192 bit?
//with sha2-512 bit padding

	//use symmetric enc probably

	@Column()
	unit: number;

	@CreateDateColumn()
	created_at: string;

}