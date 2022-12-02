import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn
} from 'typeorm';

@Entity()
export class DmEvent {
	@PrimaryGeneratedColumn('uuid')
	_id: string;//*

	@Column()
	dm_conversation_id: string;

	@Column()
	event_type: string;//*


	@Column()
	sender_id: string;

	@Column()//the encrypted text message
	text: string;// signal protocol? , ietf_xchacha20 (+S2V) , AEAD aes-256-gcm-siv?

	//https://developers.google.com/tink/supported-key-types?hl=id
	//bouncycastle , libsodium

	//https://crypto.stackexchange.com/questions/88692/changing-an-encryption-scheme-from-aes-to-chacha20

	//https://soatok.blog/2020/07/12/comparison-of-symmetric-encryption-methods/#aes-gcm-vs-aes-gcm-siv
	//invisible salamander=https://eprint.iacr.org/2019/016.pdf

	//Neither algorithm is message committing, which makes both unsuitable for algorithms like OPAQUE
	//Message Franking via Committing Authenticated Encryption

	//https://blog.cloudflare.com/opaque-oblivious-passwords/
	//https://eprint.iacr.org/2018/163.pdf

	@CreateDateColumn()
	created_at: string;

}
