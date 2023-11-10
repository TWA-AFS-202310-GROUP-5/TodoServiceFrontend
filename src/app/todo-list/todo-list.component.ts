import { Component, EventEmitter, Output } from '@angular/core';
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

  ondeleteItem(id: number) {
    this.todoHttpService.delete(id).subscribe(() => this.refreshList());
  }

  onMarkDone(item: ToDoItem) {
    this.todoHttpService.getItemDone(item).subscribe(() => this.refreshList());
  }
}
