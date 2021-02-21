import { Injectable } from '@nestjs/common';
import { todo, TodoStatusEnum } from './todo';

@Injectable()
export class TodoService {
  private todos: todo[] = [];

  addTodo(
    id: number,
    name: string,
    description: string,
    date: Date,
    statut: TodoStatusEnum,
  ): any {
    const todoItem = new todo(id, name, description, date, statut);
    this.todos.push(todoItem);
    return this.todos;
  }

  getTodo(): string {
    return 'u have ' + this.todos.length + 'itemes ';
  }
}
