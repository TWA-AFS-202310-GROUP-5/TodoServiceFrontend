import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: ToDoItem[] = [];
  constructor(
    private service: TodoService
  ) { }

  ngOnInit() {
    this.items = this.service.getAll()
  }


}
