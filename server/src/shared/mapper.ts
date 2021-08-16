import {TodoEntity} from "@todo/entity/todo.entity";
import {TodoDto} from "@todo/dto/todo.dto";

import {UserEntity} from "@user/entity/user.entity";
import {UserDto} from "@user/dto/user.dto";

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description, createdOn } = data;

  return  { id, name, description, createdOn};

};

export const toUserDto = (data: UserEntity): UserDto => {
  const { id, username, email } = data;
  return { id, username, email};
};
