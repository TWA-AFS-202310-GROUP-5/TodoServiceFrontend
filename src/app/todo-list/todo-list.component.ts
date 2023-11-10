import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];

  constructor(private todoService: TodoService, private todoHttpService: TodoHttpService, private router: Router) {}

  ngOnInit() {
    this.todoHttpService.getAll().subscribe(todoItems => {
      this.items = todoItems
    });
  }

  onDone(id: number) {
    this.todoService.markDone(id);
  }

  onGotoDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`)
  }
}
