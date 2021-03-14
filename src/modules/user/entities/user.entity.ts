import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ name: 'first_name', type: 'varchar', length: 45, nullable: false })
    firstName: string;

    @Column({ name: 'last_name', type: 'varchar', length: 45, nullable: true })
    lastName: string;

    @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;

    @Column({ type: 'varchar', length: 15, nullable: true })
    phone: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    avatar: string;
}