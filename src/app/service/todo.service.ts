import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  items: ToDoItem[] = [];

  newItem: ToDoItem = {
    id: 0,
    title: '',
    description: '',
    isDone: false,
  };

  constructor() {}

  getAll() {
    return this.items;
  }

  createTodoItem(title: string, description: string) {
    this.items.push({
      id: this.items.length + 1,
      title: title,
      description: description,
      isDone: false,
    });
  }
}
