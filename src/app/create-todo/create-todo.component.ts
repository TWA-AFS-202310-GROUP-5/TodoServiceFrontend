import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService
  ) {}

  @Output() created = new EventEmitter();

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  onSubmit() {
    const formValue = this.todoForm.value;
    if (formValue.description && formValue.title) {
      this.httpService
        .create(formValue.title, formValue.description)
        .subscribe(() => {
          this.todoForm.reset();
          this.created.emit();
        });
    }
  }
}
