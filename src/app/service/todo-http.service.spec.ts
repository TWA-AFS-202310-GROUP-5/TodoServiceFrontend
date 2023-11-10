import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    service = new TodoHttpService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todo items when getAll', () => {
    httpClientSpy.get.and.returnValue(
      asyncData(
        {
          id: 0,
          title: 'Home work',
          description: 'Have to complete home work?',
          isDone: false,
        },
      )
    );
    service.getItemById(0).subscribe(data => {
      expect(data).toEqual({
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work?',
        isDone: false,
      })
    })
    expect(httpClientSpy.get.calls.count()).toEqual(1)
  });

  it('should get todo item when call getItemById given id', () => {
    httpClientSpy.get.and.returnValue(
      asyncData([
        {
          id: 0,
          title: 'Home work',
          description: 'Have to complete home work?',
          isDone: false,
        },
      ])
    );
    service.getAll().subscribe(data => {
      expect(data.length).toEqual(1)
    })
    expect(httpClientSpy.get.calls.count()).toEqual(1)
  });

  it('should call post with item when create given todoitem', () => {
    httpClientSpy.post.and.returnValue(asyncData({
      id: 0,
      title: 'Home work',
      description: 'Have to complete home work?',
      isDone: false,
    }))
    service.create('Home work', 'Have to complete home work?').subscribe()
    expect(httpClientSpy.post.calls.count()).toEqual(1)
  });

  it('should change done in todo item using put when markDone given id', () => {
    httpClientSpy.put.and.returnValue(asyncData({
      id: 0,
      title: 'Home work',
      description: 'Have to complete home work?',
      isDone: false,
    }))
    httpClientSpy.get.and.returnValue(
      asyncData([
        {
          id: 0,
          title: 'Home work',
          description: 'Have to complete home work?',
          isDone: false,
        },
      ])
    )
    service.updateItem({
      id: 0,
      title: 'Home work',
      description: 'Have to complete home work?',
      isDone: true,
    })
    expect(httpClientSpy.put.calls.count()).toEqual(1)
  });
  
});
