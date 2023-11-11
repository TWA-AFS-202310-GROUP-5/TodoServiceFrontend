import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  constructor(private httpClient: HttpClient) {}
  baseUrl: string = 'https://localhost:5001/ToDoItem';

  getAll() {
    return this.httpClient.get<ToDoItem[]>(this.baseUrl);
  }

  create(title: string, description: string) {
    return this.httpClient.post(this.baseUrl, {
      title: title,
      description: description,
      isDone: false,
    });
  }

  update(todoItem: ToDoItem) {
    return this.httpClient.put(this.baseUrl + `/${todoItem.id}`, todoItem);
  }

  getById(id: number) {
    return this.httpClient.get<ToDoItem>(this.baseUrl + `/${id}`);
  }

  deleteById(id: number) {
    return this.httpClient.delete(this.baseUrl + `/${id}`);
  }
}
