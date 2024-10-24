import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import type { AuditAction } from "./audit-action.ts";
import { User } from "./user.ts";
import type { User as UserType } from "./user.ts";

@Entity()
export class AuditLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  entityName!: string;

  @Column({ type: "int" })
  entityId!: number;

  @Column({ type: "json", nullable: true })
  value: Record<string, unknown> | undefined;

  @ManyToOne(() => User, { nullable: true, eager: true })
  user?: UserType;

  @CreateDateColumn()
  timestamp!: Date;

  @Column({ type: "varchar", length: 255 })
  action!: AuditAction;
}
