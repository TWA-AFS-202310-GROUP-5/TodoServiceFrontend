import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  currentItem: ToDoItem | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private activityRouter: ActivatedRoute,
    private service : TodoHttpService
  ) { }
  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  ngOnInit() {
    const id = this.activityRouter.snapshot.paramMap.get("id");
    if (id){
      this.service.getItemById(Number(id)).subscribe(
        (res) => {
          this.currentItem = res;
          this.todoForm.value.description = res.description;
          this.todoForm.value.title = res.title;
        }
        
      )
    }
    
  }

  onSave(){
    const formValues = this.todoForm.value;
    if(formValues.title && formValues.description && this.currentItem){
      let updateItem = {
        ...this.currentItem,
        title: formValues.title,
        description: formValues.description
      }
      this.service.update(updateItem.id, updateItem).subscribe(
        (res) => {
          this.currentItem = res;
          this.todoForm.value.description = res.description;
          this.todoForm.value.title = res.title;
        }
      )
    }
  }

}
