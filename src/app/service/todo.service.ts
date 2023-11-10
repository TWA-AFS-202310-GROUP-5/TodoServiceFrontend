import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  items: ToDoItem[] = [
    {
      id: 1,
      title: 'sleep',
      description: 'go to bed early',
      isDone: false,
    },
    {
      id: 2,
      title: 'eat lunch',
      description: 'hungry',
      isDone: false,
    },
  ];

  constructor() {}

  getAll() {
    return this.items;
  }
}
