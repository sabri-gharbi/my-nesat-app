import { Injectable } from '@nestjs/common';
import { TodoStatusEnum } from './TodoStatus';

@Injectable()
export class TodoService {
  private todos = [];

  addTodo(
    id: string,
    name: string,
    description: string,
    date: Date,
    statut: TodoStatusEnum,
  ): any {
    const todoItem = { id, name, description, date, statut };
    this.todos.push(todoItem);
    return this.todos;
  }

  getTodo(name): any {
    return this.todos.find((todo) => todo.name === name);
  }
}
