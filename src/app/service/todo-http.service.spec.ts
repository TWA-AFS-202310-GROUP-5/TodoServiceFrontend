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
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TodoHttpService(httpClientSpy);
  });


  it('should get all todo items when call getAll',()=>{
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
    service.getAll().subscribe(data => {
      expect(data.length).toBe(1)
    })
    expect(httpClientSpy.get.calls.count()).toBe(1)
  })
});
