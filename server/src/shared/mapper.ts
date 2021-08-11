import {TodoEntity} from "../todo/entity/ToDo.entity";
import {TodoDto} from "../todo/dto/ToDo.dto";

export const toTodoDto = (data: TodoEntity): TodoDto => {
  const { id, name, description } = data;

  return  { id, name, description};

};
