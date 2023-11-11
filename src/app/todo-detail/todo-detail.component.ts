import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  item: ToDoItem | undefined
  constructor(private activatedRouter: ActivatedRoute, private todoHttpService: TodoHttpService, private formBuilder: FormBuilder) { }
  
  todoForm = this.formBuilder.group({
    title: '',
    description: ''
  })

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('detailId')
    this.todoHttpService.getById(Number(id)).subscribe((item) => {
      if (item){
        this.item = item
        this.todoForm.setValue({title: item.title, description: item.description})
      }
    })
  }

  onSubmit() {
    const formValues = this.todoForm.value
    if (formValues.title && formValues.description){
      if (this.item){
        this.item.title = formValues.title
        this.item.description = formValues.description
        console.log(this.item)
        this.todoHttpService.update(this.item).subscribe()
      }
    }
  }
}
