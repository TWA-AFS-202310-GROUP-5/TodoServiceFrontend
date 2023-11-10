import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem | undefined;

  constructor(
    private todoService: TodoService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('detailId');
    console.log(id);
    this.todoService.getItemById(Number(id));
  }
}
