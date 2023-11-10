import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  items: ToDoItem[] = [];

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

  getItemDone(id: number) {
    const currentItem = this.items.find((item) => item.id === id);
    if (currentItem) {
      currentItem.isDone = true;
    }
  }

  getItemById(id: number) {
    return this.items.find((item) => item.id === id);
  }
}
