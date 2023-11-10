import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../service/todo.service';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private service: TodoService,
    private httpService: TodoHttpService
    ) {}

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });
  ngOnInit() {}

  onSubmit() {
    const formValues = this.todoForm.value;
    if(formValues.title && formValues.description){
      // this.service.createTodo(formValues.title, formValues.description)
      this.httpService.create(formValues.title, formValues.description).subscribe(
        (result) => {
          this.todoForm.reset();
        }
      )
    }
  }
}
