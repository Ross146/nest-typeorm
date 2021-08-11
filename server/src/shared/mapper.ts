import {TodoEntity} from "@todo/entity/todo.entity";
import {TodoDto} from "@todo/dto/todo.dto";

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description, createdOn } = data;

  return  { id, name, description, createdOn};

};
