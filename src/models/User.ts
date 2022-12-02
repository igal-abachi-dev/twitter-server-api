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

//password hash , salt , email , phone_number?
//Argon2id

//use passport-jwt? Auth0, https://auth0.com/pricing
//free for up to 7k USERS


//body-parser , jsonwebtoken , nodemailer , libphonenumber-js

//https://supertokens.com/ ,  https://github.com/supertokens
//https://supertokens.com/docs/emailpassword/architecture

//Firebase Auth , Supabase Auth

//okta

//AWS Cognito with aws-amplify package and works like a charm.
//
// Easy like:
//
// import {Auth} from "aws-amplify";
// await Auth.signIn(username, password);
