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
    const mockData1 = [
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

    httpClientSpy.get.and.returnValue(asyncData(mockData1));

    service.getAll().subscribe((data) => {
      expect(data).toEqual(mockData1);
    });

    expect(httpClientSpy.get.calls.count()).toEqual(1); // get方法被调用一次
  });

  it('should get item by id when call getItemById', () => {
    const mockData2 = {
      id: 3,
      title: 'Home work333',
      description: 'Have to complete home work',
      isDone: false,
    };

    httpClientSpy.get.and.returnValue(asyncData(mockData2));

    service.getItemById(3).subscribe((data) => {
      expect(data).toEqual(mockData2);
    });

    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });

  it('should return new todo when call create given new todoitem', () => {
    const mockData3 = {
      id: 1,
      title: 'new item',
      description: 'balala',
      isDone: false,
    };
    httpClientSpy.post.and.returnValue(asyncData(mockData3));

    service.createTodoItem('new item', 'balala').subscribe((data) => {
      expect(data).toEqual(mockData3);
    });
    expect(httpClientSpy.post.calls.count()).toEqual(1);
  });

  it('should return updated item with new title description isDone when call update', () => {
    const mockOldData = {
      id: 1,
      title: 'old item title',
      description: 'old description',
      isDone: false,
    };
    const mockDataUpdated = {
      id: 1,
      title: 'updated item title',
      description: 'updated description',
      isDone: true,
    };
    httpClientSpy.put.and.returnValue(asyncData(mockDataUpdated));
    service.update(mockOldData, mockDataUpdated).subscribe((data) => {
      expect(data).toEqual(mockDataUpdated);
    });
    expect(httpClientSpy.put.calls.count()).toEqual(1);
  });

  it('should return deleted todoItem by id when call delete', () => {
    const mockDeletedData = {
      id: 5,
      title: 'No homework',
      description: 'Happy no homework day !',
      isDone: true,
    };

    httpClientSpy.delete.and.returnValue(asyncData(mockDeletedData));

    service.delete(5).subscribe((data) => {
      expect(data).toEqual(mockDeletedData);
    });

    expect(httpClientSpy.delete.calls.count()).toEqual(1);
  });
});
