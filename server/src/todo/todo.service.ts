import {Injectable, HttpException, HttpStatus} from '@nestjs/common';
import * as uuid from 'uuid';

import {TodoEntity} from "./entity/ToDo.entity";
import {todos} from "../mock/todos";
import {TodoDto} from "./dto/ToDo.dto";
import {TodoCreateDto} from "./dto/ToDoCreate.dto";
import {toPromise} from "../shared/utils";
import {toTodoDto} from "../shared/mapper";

@Injectable()
export class TodoService {
  todos: TodoEntity[] = todos;

  async getAllTodo(): Promise<TodoDto[]> {

    return toPromise(this.todos.map(todo => toTodoDto(todo)));
  }

  async getOneTodo(id: string): Promise<TodoDto> {
    const todo = this.todos.find(todo => todo.id === id);

    if (!todo) {
      throw new HttpException(`Todo item doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    return toPromise(toTodoDto(todo));
  }

  async createTodo(todoDto: TodoCreateDto): Promise<TodoDto> {
    const {name, description} = todoDto;

    const todo: TodoEntity = {
      id: uuid.v1(),
      name,
      description,
    };

    this.todos.push(todo);
    return toPromise(toTodoDto(todo));
  }

  async updateTodo(id: string, partialTodoDto: Partial<TodoDto>) {
    const todo = this.todos.find(todo => todo.id === id);

    if (!todo) {
      throw new HttpException(`Todo item doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    const updatedTodo = {...todo, ...partialTodoDto}

    this.todos = this.todos.map(todo => todo.id === id ? updatedTodo : todo);

    return toPromise(toTodoDto(updatedTodo));
  }

  async destroyTodo(id: string): Promise<void> {
    const todo = this.todos.find(todo => todo.id === id);

    if (!todo) {
      throw new HttpException(`Todo item doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}

