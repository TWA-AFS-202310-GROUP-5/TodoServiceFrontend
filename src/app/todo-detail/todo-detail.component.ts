import { Component, EventEmitter, Output } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { ActivatedRoute } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  @Output() created = new EventEmitter();
  item: ToDoItem | undefined;

  public tobetitle = '';
  public tobeDescription = '';
  public tobeisDone = false;

  constructor(
    private todoService: TodoService,
    private activatedRouter: ActivatedRoute,
    private todoHttpService: TodoHttpService
  ) {}

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('detailId');
    this.todoHttpService.getItemById(Number(id)).subscribe((item) => {
      this.item = item;
      this.tobetitle = this.item.title;
      this.tobeDescription = this.item.description;
      this.tobeisDone = this.item.isDone;
    });
  }

  onUpdate(item: ToDoItem) {
    const tobeItem: ToDoItem = {
      id: item.id,
      title: this.tobetitle,
      description: this.tobeDescription,
      isDone: this.tobeisDone,
    };
    this.todoHttpService
      .update(item, tobeItem)
      .subscribe(() => this.created.emit());
  }
}
