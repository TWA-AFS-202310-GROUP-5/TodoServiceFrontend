import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
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
    private router: Router,
    private todoHttpService: HttpService
  ) {}
  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.todoHttpService.getAll().subscribe((todoItems) => {
      this.items = todoItems;
    });
  }

  onDelete(id: number) {
    this.todoHttpService.delete(id).subscribe(() => {
      this.onRefresh();
    });
  }

  onMarkDone(id: number) {
    this.todoHttpService.markDone(id).subscribe(() => {
      this.onRefresh();
    });
  }

  onNavigateUrl(id: number) {
    this.router.navigateByUrl(`detail/${id}`);
  }
}
