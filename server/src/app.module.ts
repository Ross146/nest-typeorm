import {DynamicModule, Module} from '@nestjs/common';
import { TodoModule } from '@todo/todo.module';
import {ConnectionOptions} from "typeorm";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({})
export class AppModule {
  static forRoot(
    connOptions: ConnectionOptions): DynamicModule {
    return {
      module: AppModule,
      controllers: [],
      imports: [TodoModule, TypeOrmModule.forRoot(connOptions)],
      providers: [],
    };
  }
}
