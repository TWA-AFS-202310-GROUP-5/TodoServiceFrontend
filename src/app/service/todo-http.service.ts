import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})

export class TodoHttpService {
  url = "https://localhost:5001/ToDoItem"
  constructor(
    private httpClient: HttpClient
  ) {}

  getAll(): Observable<ToDoItem[]>{
    return this.httpClient.get<ToDoItem[]>(this.url);
  }
}
