import { TestBed } from '@angular/core/testing';

import { ChatServicioService } from './chat-servicio.service';

describe('ChatServicioService', () => {
  let service: ChatServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
