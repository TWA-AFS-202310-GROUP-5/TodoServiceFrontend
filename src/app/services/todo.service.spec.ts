// import { TestBed } from '@angular/core/testing';

// import { TodoService } from './todo.service';

// describe('TodoService', () => {
//   let service: TodoService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(TodoService);
//     service.items = [
//       {
//         id: 1,
//         title: 'buy milk',
//         description: 'pure mulk',
//         isDone: false,
//       },
//     ];
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should get all items when call get all', () => {
//     const items = service.getAll();

//     expect(items).toEqual([
//       {
//         id: 1,
//         title: 'buy milk',
//         description: 'pure mulk',
//         isDone: false,
//       },
//     ]);
//   });

//   it('should create one item when call create', () => {
//     service.create('buy bread', 'black bread');

//     expect(service.items).toEqual([
//       {
//         id: 1,
//         title: 'buy milk',
//         description: 'pure mulk',
//         isDone: false,
//       },
//       {
//         id: 2,
//         title: 'buy bread',
//         description: 'black bread',
//         isDone: false,
//       },
//     ]);
//   });
//   it('should mark done when call markDone', () => {
//     service.markDone(1);

//     expect(service.items[0].isDone).toBe(true);
//   });
// });
