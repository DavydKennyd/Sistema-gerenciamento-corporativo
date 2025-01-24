// src/products/entities/product.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  minimumStock: number;

  @Column({ nullable: true })
  location: string;
}
