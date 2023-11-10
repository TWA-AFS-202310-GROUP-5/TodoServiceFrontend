import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: ToDoItem[] = [
    {
      id: 1,
      title: "dance",
      isDone: true,
      description: "haa"     
    },
    {
      id: 2,
      title: "play piano",
      isDone: false,
      description: "haa"     
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
