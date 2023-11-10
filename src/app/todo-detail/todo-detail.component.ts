import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  currentItem: ToDoItem | undefined;

  constructor(
    private activityRouter: ActivatedRoute,
    private service : TodoService
  ) { }

  ngOnInit() {
    const id = this.activityRouter.snapshot.paramMap.get("id");
    if (id){
      this.currentItem = this.service.getTodoById(Number(id));
      console.log(this.currentItem)
    }
    
  }

}
