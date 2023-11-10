import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [
      {
        id: 1,
        title: '111',
        description: 'ddd',
        isDone: false,
      },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all items when call getAll', () => {
    const items = service.getAll();
    expect(items).toEqual([
      {
        id: 1,
        title: '111',
        description: 'ddd',
        isDone: false,
      },
    ]);
  });

  it('should create an item when call createTodoItem', () => {
    service.createTodoItem('test2', 'content');
    expect(service.items).toEqual([
      {
        id: 1,
        title: '111',
        description: 'ddd',
        isDone: false,
      },
      {
        id: 2,
        title: 'test2',
        description: 'content',
        isDone: false,
      },
    ]);
  });

  it('should return item isDone be true when call getItemDone', () => {
    service.getItemDone(1);
    expect(service.items[0].isDone).toEqual(true);
  });
});
