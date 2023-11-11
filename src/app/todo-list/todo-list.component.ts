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

  onMarkDone(id: number) {
    // this.todoService.markDone(id);
    const item = this.items.find(x => x.id === id)
    if(item){
      item.isDone = true
      this.todoHttpService.update(item).subscribe(() => {
        this.refreshList()
      })
    }
  }

  onGoToDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
