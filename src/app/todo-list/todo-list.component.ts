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
    this.httpService.update(todoItem.id, todoItem).subscribe(
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
}
