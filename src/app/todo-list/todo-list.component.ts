import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items: ToDoItem[] = [
    {      
      id: 1,
      title: 'sleep',
      description: 'go to bed early',
      isDone: false
    },
    {      
      id: 2,
      title: 'eat lunch',
      description: 'hungry',
      isDone: false
    }
  ]
}
