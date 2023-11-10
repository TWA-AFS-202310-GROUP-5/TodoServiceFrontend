import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
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
    private todoHttpService: TodoHttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.todoHttpService.getAll().subscribe((todoItems) => {
      this.items = todoItems;
    });
  }

  onDone(id: number) {
    let item = this.items.find(_ => _.id === id);
    if (item) {
      item.isDone = true
      this.todoHttpService.updateItem(item).subscribe(()=>this.refreshList());
    }
  }

  onGotoDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }

  onDelete(id: number) {
    this.todoHttpService.deleteItem(id).subscribe(()=>this.refreshList());
  }
}
