import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private todoHttpService: HttpService,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('detailId');
    this.todoHttpService.getItemById(Number(id)).subscribe((todoItem) => {
      this.item = todoItem;
    });
  }
  updateTodo() {
    if (this.item) {
      this.todoHttpService
        .updateTodo(this.item.id, this.item)
        .subscribe((updatedTodo) => {
          this.item = updatedTodo;
          this.router.navigateByUrl("");
        });
    }
  }
}
