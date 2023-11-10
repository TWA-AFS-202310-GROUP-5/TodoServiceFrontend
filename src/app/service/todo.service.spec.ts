import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [
      {
        id: 0,
        title: 'buy milk',
        description: 'dont buy milk',
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
        id: 0,
        title: 'buy milk',
        description: 'dont buy milk',
        isDone: false,
      },
    ]);
  });

  it('should create item when call create given title and description', () => {
    service.create("buy cookie", "dont buy cookie")

    expect(service.items).toEqual([
      {
        id: 0,
        title: 'buy milk',
        description: 'dont buy milk',
        isDone: false,
      },
      {
        id: 1,
        title: 'buy cookie',
        description: 'dont buy cookie',
        isDone: false,
      },
    ]);
  });

  it('should change item isDone to true when call markDone given id', () => {
    service.markDone(0)

    expect(service.items).toEqual([
      {
        id: 0,
        title: 'buy milk',
        description: 'dont buy milk',
        isDone: true,
      },
    ]);
  });
});
