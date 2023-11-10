import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string = 'https://localhost:44309/ToDoItem';
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<ToDoItem[]>(this.url);
  }

  create(title: string, description: string) {
    return this.httpClient.post(this.url, {
      title: title,
      description: description,
      isDone: false,
    });
  }
}
