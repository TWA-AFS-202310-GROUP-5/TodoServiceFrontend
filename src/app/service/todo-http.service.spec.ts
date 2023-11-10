/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoHttpService } from './todo-http.service';

describe('Service: TodoHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoHttpService]
    });
  });

  it('should ...', inject([TodoHttpService], (service: TodoHttpService) => {
    expect(service).toBeTruthy();
  }));
});
