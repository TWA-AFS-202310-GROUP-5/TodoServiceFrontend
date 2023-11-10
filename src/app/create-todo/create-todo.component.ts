import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../service/todo.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {}

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  onSubmit() {
    const formValues = this.todoForm.value;
    if (formValues.title && formValues.description) {
      this.todoService.create(formValues.title, formValues.description);
      this.todoForm.reset()
    }
  }
}
