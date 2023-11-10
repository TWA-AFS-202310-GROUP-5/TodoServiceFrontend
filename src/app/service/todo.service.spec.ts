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
        title: 'buy milk',
        description: 'buy some milk',
        isDone: false,
      }
    ]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getAll', () => {
    const item = service.getAll()
    expect(item).toEqual([
      {
        id: 1,
        title: 'buy milk',
        description: 'buy some milk',
        isDone: false,
      }
    ])
  });

  it('should create new item when call create', () => {
    service.create("new item", 'new item description')
    expect(service.items).toEqual([
      {
        id: 1,
        title: 'buy milk',
        description: 'buy some milk',
        isDone: false,
      }, 
      {
        id: 2,
        title: 'new item',
        description: 'new item description',
        isDone: false,
      }
    ])
  });

  it('should mark item as done when call markDone', () => {
    service.markDone(1)
    expect(service.items[0].isDone).toEqual(true)
  })
});
