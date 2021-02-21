import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { v4 as uuidv4 } from 'uuid';
import { TodoStatusEnum } from './todo';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoservice: TodoService) {}

  @Get()
  getTodos(): any {
    return this.todoservice.getTodo();
  }

  @Post()
  addTodos(
    @Body('name') name: string,
    @Body('description') description: string,
  ): any {
    return this.todoservice.addTodo(
      uuidv4(),
      name,
      description,
      new Date(),
      TodoStatusEnum.waiting,
    );
  }
}
