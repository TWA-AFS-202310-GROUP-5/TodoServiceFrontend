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

  constructor(
    private todoService: TodoService,
    private router: Router,
    private todoHttpService: TodoHttpService
  ) {}

  ngOnInit() {
    //this.items = this.todoService.getAll();
    this.refreshList();
  }

  refreshList() {
    this.todoHttpService.getAll().subscribe((todoItems) => {
      this.items = todoItems;
    });
  }

  onGoToDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }

  onMarkDone(id: number) {
    //this.todoService.getItemDone(id);
    this.todoHttpService.getItemDone(id);
  }
}

/*
  onMarkDone(id: number) {
    //this.todoService.getItemDone(id);
    this.todoHttpService.getItemDone(id);
  }
*/
