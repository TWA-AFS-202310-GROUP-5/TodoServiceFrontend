import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { ToDoItem } from 'src/model/ToDoItem';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [{
      id: 1,
      description: "test-desc",
      title: "test-title",
      isDone: false
    }]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should get all items when call getAll",()=>{
    const items = service.getAll();
    expect(items).toEqual(
      [{
        id: 1,
        description: "test-desc",
        title: "test-title",
        isDone: false
      }]
    )
  });

  it("should create new todo item when call createTodo", ()=>{
    service.createTodo("new title", "new desc");
    expect(service.items).toEqual(
      [{
        id: 1,
        description: "test-desc",
        title: "test-title",
        isDone: false
      },
    {
      id: 2,
      description: "new desc",
      title: "new title",
      isDone: false
    }]
    )
  })

  it("should mark item isDone to true when call markDone", ()=>{
    service.markDone(1);
    expect(service.items[0].isDone).toBeTrue();
  })
});
