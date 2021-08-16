import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe, UseGuards, Req} from '@nestjs/common';
import {TodoService} from "./todo.service";
import {TodoDto} from "./dto/todo.dto";
import {TodoCreateDto} from "./dto/todoCreate.dto";
import {TodoListDto} from "./dto/todoList.dto";
import {toPromise} from "@shared/utils";
import {AuthGuard} from "@nestjs/passport";
import {UserDto} from "@user/dto/user.dto";

@Controller("api/todos")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @UseGuards(AuthGuard())
  async findAll(): Promise<TodoListDto> {
    const todos = await this.todoService.getAllTodo();
    return toPromise({todos});
  }

  @Get(":id")
  @UseGuards(AuthGuard())
  async findOne(@Param("id") id: string): Promise<TodoDto> {
    return await this.todoService.getOneTodo(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  @UsePipes(new ValidationPipe())
  async create(@Body() todoCreateDto: TodoCreateDto, @Req() req: any, ): Promise<TodoDto> {
    const user = <UserDto>req.user;
    return await this.todoService.createTodo(user, todoCreateDto);
  }

  @Put(":id")
  @UseGuards(AuthGuard())
  @UsePipes(new ValidationPipe())
  async update(
    @Param("id") id: string,
    @Body() todoDto: TodoDto
  ): Promise<TodoDto> {
    return await this.todoService.updateTodo(id, todoDto);
  }

  @Delete(":id")
  async destroy(@Param("id") id: string): Promise<TodoDto> {
    return await this.todoService.destroyTodo(id);
  }
}
