import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoHttpService: TodoHttpService,
    private formBuilder: FormBuilder
  ) {}

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoHttpService.getItemById(Number(id)).subscribe((item) => {
      this.item = item;
      this.todoForm.setValue({title: item.title, description: item.description})
    });
  }

  onSave() {
    const formValues = this.todoForm.value;

    if (this.item && formValues.title && formValues.description) {
      this.todoHttpService
        .updateItem({ id: this.item.id, title: formValues.title, description: formValues.description, isDone: this.item.isDone })
        .subscribe();
    }
  }
}
