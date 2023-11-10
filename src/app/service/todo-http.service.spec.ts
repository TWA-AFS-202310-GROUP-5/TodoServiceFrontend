/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoHttpService } from './todo-http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, defer, of } from 'rxjs';
import { ToDoItem } from 'src/model/ToDoItem';


function asyncData<T>(data: T){
  return defer(()=> Promise.resolve(data))
}
describe('Service: TodoHttp', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    service = new TodoHttpService(httpClientSpy);
    httpClientSpy.get.and.returnValue(
      asyncData([
        {
          "id": 0,
          "title": "Home work",
          "description": "Have to complete home work",
          "isDone": false
        }
      ])
    );
  });


  it('should get all todo items when call getAll',()=>{

    service.getAll().subscribe(data => {
      expect(data.length).toBe(1)
    })
    expect(httpClientSpy.get.calls.count()).toBe(1)
  })

  it('should get item by id when call getItemById', ()=>{
    service.getAll().subscribe(data => {
      expect(data.length).toBe(1)
    })
    expect(httpClientSpy.get.calls.count()).toBe(1)
  })

  it('should delete item by id when call deleteItemById', ()=>{
    httpClientSpy.delete.and.returnValue(
      asyncData([
        {
          "id": 0,
          "title": "Home work",
          "description": "Have to complete home work",
          "isDone": false
        }
      ])
    );
    service.deleteItemById(1).subscribe(data => {
    })
    expect(httpClientSpy.delete.calls.count()).toBe(1)
  })

  it('should update item by id when call update', ()=>{
    httpClientSpy.put.and.returnValue(
      asyncData([
        {
          "id": 0,
          "title": "Home work",
          "description": "Have to complete home work",
          "isDone": true
        }
      ])
    );
    service.update(0,
      {
        "id": 0,
        "title": "Home work",
        "description": "Have to complete home work",
        "isDone": true
      }
    ).subscribe(_=> {
    })
    expect(httpClientSpy.put.calls.count()).toBe(1)
  })

  it('should create item by id when call create', ()=>{
    httpClientSpy.post.and.returnValue(
      asyncData([
        {
          "id": 0,
          "title": "Home work",
          "description": "Have to complete home work",
          "isDone": true
        }
      ])
    );
    service.create("Home work", "Have to complete home work").subscribe(data => {

    })
    expect(httpClientSpy.post.calls.count()).toBe(1)
  })
});
