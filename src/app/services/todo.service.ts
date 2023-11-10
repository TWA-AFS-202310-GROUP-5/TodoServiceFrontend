import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  items: ToDoItem[] = [
    {
      id: 0,
      title: 'buy milk',
      description: 'pure mulk',
      isDone: true,
    },
    {
      id: 1,
      title: 'buy bread',
      description: 'black bread',
      isDone: false,
    },
  ];

  getAll() {
    return this.items;
  }
  constructor() {}
}
