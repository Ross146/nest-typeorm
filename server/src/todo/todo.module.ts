import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TodoEntity} from "@todo/entity/todo.entity";
import {UserModule} from "@user/user.module";
import {AuthModule} from "../auth/auth.module";
import {UserEntity} from "@user/entity/user.entity";

@Module({
  imports: [
    UserModule,
      AuthModule,
      TypeOrmModule.forFeature([
        TodoEntity, UserEntity
      ])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
