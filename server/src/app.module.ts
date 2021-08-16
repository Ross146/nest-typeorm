import {DynamicModule, Module} from '@nestjs/common';
import { TodoModule } from '@todo/todo.module';
import {ConnectionOptions} from "typeorm";
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from '@user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({})
export class AppModule {
  static forRoot(
    connOptions: ConnectionOptions): DynamicModule {
    return {
      module: AppModule,
      controllers: [],
      imports: [UserModule, AuthModule, TodoModule, TypeOrmModule.forRoot(connOptions)],
      providers: [],
    };
  }
}
