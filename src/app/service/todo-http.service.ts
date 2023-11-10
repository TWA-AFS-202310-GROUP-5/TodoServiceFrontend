import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})

export class TodoHttpService {
  url = "https://localhost:5001/ToDoItem/"
  constructor(
    private httpClient: HttpClient
  ) {}

  getAll(): Observable<ToDoItem[]>{
    return this.httpClient.get<ToDoItem[]>(this.url);
  }

  getItemById(id: number): Observable<ToDoItem>{
    return this.httpClient.get<ToDoItem>(this.url+id);
  }

  deleteItemById(id: number): Observable<Object>{
    return this.httpClient.delete(this.url+id);
  }

  create(title:string, description:string){
    return this.httpClient.post(this.url, {
      title: title,
      description: description,
      isDone: false
    })
  }

  update(id:number, title:string, description:string){
    return this.httpClient.put(this.url+id, {
      title: title,
      description: description,
      isDone: false
    })
  }
}
