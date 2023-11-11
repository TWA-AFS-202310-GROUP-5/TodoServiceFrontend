import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';
import { ToDoItem } from 'src/model/ToDoItem';
function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('HttpService', () => {
  let service: HttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post','put','delete','patch']);
    service = new HttpService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all when call getAll', () => {
    httpClientSpy.get.and.returnValue(
      asyncData([
        {
          id: 0,
          title: 'Home work',
          description: 'Have to complete home work',
          isDone: false,
        },
      ])
    );

    service.getAll().subscribe((data) => {
      expect(data.length).toBe(1);
      expect(httpClientSpy.get.calls.count()).toBe(1);
    });
  });

  it('should create one item when call create', () => {
    httpClientSpy.post.and.returnValue(
      asyncData({
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      })
    );

    service
      .create('Home work', 'Have to complete home work')
      .subscribe((data) => {
        expect(data.id).toEqual(0);
        expect(httpClientSpy.post.calls.count()).toBe(1);
      });
  });

  it('should update a todo item when update', () => {
    const id = 0;
    const updatedItem: ToDoItem = {
      id: 0,
      title: 'Home work',
      description: 'Have to complete home work',
      isDone: false,
    };

    httpClientSpy.put.and.returnValue(
      asyncData(
        updatedItem,
      )
    );

    
    service.updateTodo(id,updatedItem).subscribe((data) => {
      expect(data.id).toEqual(0);
      expect(httpClientSpy.put.calls.count()).toBe(1);
    });
  });
});
