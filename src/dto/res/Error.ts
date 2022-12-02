import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

export class Error {
	code:number|undefined;
	message:string;
}