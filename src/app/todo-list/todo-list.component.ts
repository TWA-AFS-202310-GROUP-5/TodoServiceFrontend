import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: ToDoItem[] = [];
  constructor(
    private httpService: TodoHttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.httpService.getAll().subscribe(todoItems => {
      this.items = todoItems;
    })
    
  }

  onMarkDone(todoItem: ToDoItem){
    let updateItem = {
      ...todoItem,
      isDone: true
    } as ToDoItem;
    this.httpService.update(todoItem.id, updateItem).subscribe(
      () => todoItem.isDone = true
    );
  }

  onGoToDetail(id: number){
    this.router.navigateByUrl(`/detail/${id}`);
  }
  onRefreshList(){
    this.httpService.getAll().subscribe(todoItems => {
      this.items = todoItems;
    })
  }

  onRemove(id: number){
    this.httpService.deleteItemById(id).subscribe(()=>{
      let deleteIndex = this.items.findIndex((item) => item.id == id)
      if(deleteIndex != -1){
        this.items.splice(deleteIndex, 1);
      }
      
    })
  }
}
