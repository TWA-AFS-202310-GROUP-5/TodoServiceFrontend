import { TodoHttpService } from './todo-http.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  let givenData = [
    {
      id: 0,
      title: 'Home work',
      description: 'Have to complete home work',
      isDone: false,
    },
    {
      id: 1,
      title: 'Home work1',
      description: 'Have to complete home work1',
      isDone: false,
    },
  ];

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new TodoHttpService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todo items when call getAll', () => {
    httpClientSpy.get.and.returnValue(asyncData(givenData));

    service.getAll().subscribe((data) => {
      expect(data.length).toEqual(2);
      expect(data).toEqual(givenData);
    });
    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });

  it('should get corresponding item when call getById', () => {
    httpClientSpy.get.and.returnValue(asyncData(givenData[0]));
    service.getById(0).subscribe((data) => {
      expect(data).toEqual(givenData[0]);
    });
    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });

  it('should return the new item when call create given title and description', () => {
    const newItem = {
      id: 2,
      title: 'Home work2',
      description: 'Have to complete home work2',
      isDone: false,
    };
    httpClientSpy.post.and.returnValue(asyncData(newItem));
    service.create(newItem.title, newItem.description).subscribe(data => {
      expect(data).toEqual(newItem)
    })
    expect(httpClientSpy.post.calls.count()).toEqual(1)
  });
});
