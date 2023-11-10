import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: ToDoItem[] = [];
  constructor(
    private service: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.items = this.service.getAll()
  }

  onMarkDone(id: number){
    this.service.markDone(id);
  }

  onGoToDetail(id: number){
    this.router.navigateByUrl(`/detail/${id}`);
  }

}
