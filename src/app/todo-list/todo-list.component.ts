import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];
  constructor(
    private todeService: TodoService,
    private router: Router,
    private todoHttpService: HttpService
  ) {}
  ngOnInit() {
    // this.items = this.todeService.getAll();
    this.onRefresh();
  }

  onRefresh() {
    this.todoHttpService.getAll().subscribe((todoItems) => {
      this.items = todoItems;
    });
  }

  onMarkDone(id: number) {
    this.todeService.markDone(id);
  }

  onNavigateUrl(id: number) {
    this.router.navigateByUrl(`detail/${id}`);
  }
}
