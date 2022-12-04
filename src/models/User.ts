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
	email: string;//<256 , encrypted?

	@Column()
	password_hash: string;//*, 108-120

	@Column()
	password_salt: string;//*, 24-30

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

//phone_number?
//Argon2id

//https://github.com/tuupola/branca-js  (jwt alternative)
//https://branca.io/
//https://github.com/mikenicholson/passport-jwt  (do similar for branca-messagepack)


//use passport-jwt? Auth0, https://auth0.com/pricing
//free for up to 7k USERS

//best Firebase / keycloack


//body-parser , jsonwebtoken , nodemailer , libphonenumber-js

//https://supertokens.com/ ,  https://github.com/supertokens
//https://supertokens.com/docs/emailpassword/architecture

//Firebase Auth , Supabase Auth , Keycloak

//https://github.com/ory/kratos

//https://webauthn.io/
//https://simplewebauthn.dev/
//https://try-webauthn.appspot.com/


//keycloak , more secure the firebase probably?
//https://hasura.io/learn/graphql/hasura-authentication/integrations/keycloak/

//okta

//AWS Cognito with aws-amplify package and works like a charm.
//
// Easy like:
//
// import {Auth} from "aws-amplify";
// await Auth.signIn(username, password);
