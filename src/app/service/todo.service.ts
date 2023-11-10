import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  items: ToDoItem[] = [
    {
      id: 1,
      title: "dance",
      isDone: true,
      description: "haa"     
    },
    {
      id: 2,
      title: "play piano",
      isDone: false,
      description: "haa"     
    }
  ];
  constructor() { }

  getAll(): ToDoItem[]{
    return this.items;
  }

  createTodo(title: string, description:string){
    this.items.push({
      id: this.items.length -1,
      title: title,
      description: description,
      isDone: false
    })
  }
}
