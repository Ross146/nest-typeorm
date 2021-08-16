import { NgModule } from '@angular/core';
import { TodoHomeComponent } from './todo-home.component';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import {AppCommonModule} from "../../../app-common/src/lib/app-common.module";

@NgModule({
  declarations: [
    TodoHomeComponent,
    TodoCreateComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    AppCommonModule
  ],
  exports: [
    TodoHomeComponent
  ]
})
export class TodoModule { }
