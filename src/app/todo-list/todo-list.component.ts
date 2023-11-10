import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];
  constructor(private todeService: TodoService) {}
  ngOnInit() {
    this.items = this.todeService.getAll();
  }

  onMarkDone(id: number) {
    this.todeService.markDone(id);
  }
}
