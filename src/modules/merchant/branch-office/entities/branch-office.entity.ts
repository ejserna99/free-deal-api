import { AuditableEntity } from 'src/base-entity';
import { Address } from 'src/modules/locate/address/entities/address.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Company } from '../../company/entities/company.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { Product } from '../../product/entities/product.entity';

@Entity('branch_offices')
export class BranchOffice extends AuditableEntity {

  @OneToOne(() => Address, { cascade: true, eager: true, nullable: true })
  @JoinColumn()
  address?: Address;

  @Column({ name: 'business_phone', type: 'varchar', length: 15, nullable: true })
  businessPhone?: string;

  @OneToOne(() => User, { cascade: true, eager: true, nullable: true })
  @JoinColumn()
  administrator: User;

  @ManyToOne(() => Company, (company) => company.branchOffices, {
    nullable: false,
  })
  company: Company;

  @OneToMany(() => Employee, (employee) => employee.branchOffice, {
    cascade: true,
    eager: true,
  })
  employees: Employee[];
  
  // @PolymorphicChildren(() => Product, {
    //   eager: true,
    // })
  // @OneToMany(() => Product, (product) => product.branchOffice, { eager: true })
  products: Product[];
}
