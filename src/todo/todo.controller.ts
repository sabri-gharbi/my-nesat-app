import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { v4 as uuidv4 } from 'uuid';
import { TodoStatusEnum } from './TodoStatus';
import { todo } from './add.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoservice: TodoService) {}

  @Get('/a*ba')
  getTodos(): any {
    return 'true';
  }

  @Post()
  addTodos(@Body() todo: todo): any {
    return this.todoservice.addTodo(
      uuidv4(),
      todo.name,
      todo.description,
      new Date(),
      TodoStatusEnum.waiting,
    );
  }
}
