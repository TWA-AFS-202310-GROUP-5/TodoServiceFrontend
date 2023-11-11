import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>; // declare object to test

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'put',
      'delete',
    ]); // pass value to object
    //service = TestBed.inject(TodoHttpService);
    service = new TodoHttpService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getAll', () => {
    const mockData = [
      {
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      },
      {
        id: 1,
        title: 'Home work again',
        description: 'Have to complete home work again',
        isDone: false,
      },
    ];

    httpClientSpy.get.and.returnValue(asyncData(mockData));

    service.getAll().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    expect(httpClientSpy.get.calls.count()).toEqual(1); // get方法被调用一次
  });

  it('should get item by id when call getItemById', () => {
    httpClientSpy.get.and.returnValue(
      asyncData({
        id: 3,
        title: 'Home work333',
        description: 'Have to complete home work',
        isDone: false,
      })
    );

    service.getItemById(3).subscribe((data) => {
      expect(data).toEqual({
        id: 3,
        title: 'Home work333',
        description: 'Have to complete home work',
        isDone: false,
      });
    });

    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });

  /*
  it('should return new todo when call create given new todoitem', () => {
    httpClientSpy.post.and.returnValue(
      asyncData({
        id: 1,
        title: 'new item',
        description: 'balala',
        isDone: false,
      })
    );
    //service.createTodoItem('new item', 'balala').subscribe();
    service.createTodoItem('new item', 'balala').subscribe((data) => {
      expect(data).toEqual({
        id: 1,
        title: 'new item',
        description: 'balala',
        isDone: false,
      });
    });
    expect(httpClientSpy.post.calls.count()).toEqual(1);
  });

  it('should update item with new title and description when call update', () => {
    httpClientSpy.post.and.returnValue(
      asyncData({
        id: 1,
        title: 'new item title',
        description: 'new description',
        isDone: false,
      })
    );

    //service.createTodoItem('new item', 'balala').subscribe();
    service
      .update(
        {
          id: 1,
          title: 'old item title',
          description: 'old description',
          isDone: false,
        },
        {
          id: 1,
          title: 'new item title',
          description: 'new description',
          isDone: false,
        }
      )
      .subscribe((data) => {
        expect(data).toEqual({
          id: 1,
          title: 'new item title',
          description: 'new description',
          isDone: false,
        });
      });
    expect(httpClientSpy.post.calls.count()).toEqual(1);
  });


*/
});
