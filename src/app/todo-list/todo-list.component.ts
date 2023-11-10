import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
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
}
