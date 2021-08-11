import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {TodoService} from "./todo.service";
import {TodoDto} from "./dto/ToDo.dto";
import {TodoCreateDto} from "./dto/ToDoCreate.dto";
import {TodoListDto} from "./dto/ToDoList.dto";
import {toPromise} from "../shared/utils";

@Controller("api/todos")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(): Promise<TodoListDto> {
    const todos = await this.todoService.getAllTodo();
    return toPromise({todos});
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<TodoDto> {
    return await this.todoService.getOneTodo(id);
  }

  @Post()
  async create(@Body() todoCreateDto: TodoCreateDto): Promise<TodoDto> {
    return await this.todoService.createTodo(todoCreateDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() todoDto: TodoDto
  ): Promise<TodoDto> {
    return await this.todoService.updateTodo(id, todoDto);
  }

  @Delete(":id")
  async destroy(@Param("id") id: string): Promise<void> {
    return await this.todoService.destroyTodo(id);
  }
}
