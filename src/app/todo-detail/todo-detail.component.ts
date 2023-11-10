import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';
import { FormBuilder } from '@angular/forms';

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
    private formBuilder: FormBuilder,
  ) {}

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoHttpService
      .getItemById(Number(id))
      .subscribe((item) => (this.item = item));
  }

  onSubmit() {
    const formValues = this.todoForm.value;

    if (formValues.title && formValues.description) {
      this.todoHttpService
        .create(formValues.title, formValues.description)
        .subscribe(() => {
          this.todoForm.reset();
        });
    }
  }
}
