import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  currentItem: ToDoItem | undefined;

  constructor(
    private activityRouter: ActivatedRoute,
    private service : TodoHttpService
  ) { }

  ngOnInit() {
    const id = this.activityRouter.snapshot.paramMap.get("id");
    if (id){
      this.service.getItemById(Number(id)).subscribe(
        (res) => {
          this.currentItem = res;
          console.log(res)
        }
        
      )
    }
    
  }

}
