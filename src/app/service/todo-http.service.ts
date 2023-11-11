import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  items: ToDoItem[] = [];

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<ToDoItem[]>('https://localhost:44309/ToDoItems');
  }

  getItemById(id: number) {
    return this.httpClient.get<ToDoItem>(
      `https://localhost:44309/ToDoItems/${id}`
    );
  }

  delete(id: number) {
    return this.httpClient.delete(`https://localhost:44309/ToDoItems/${id}`);
  }

  createTodoItem(title: string, description: string) {
    return this.httpClient.post('https://localhost:44309/ToDoItems', {
      title: title,
      description: description,
      isDone: false,
    });
  }

  update(item: ToDoItem, tobeItem: ToDoItem) {
    return this.httpClient.put<ToDoItem>(
      `https://localhost:44309/ToDoItems/${item.id}`,
      tobeItem
    );
  }
}
