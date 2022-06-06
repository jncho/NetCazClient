import { TestBed } from '@angular/core/testing';

import { NetCazLayerService } from './net-caz-layer.service';

describe('NetCazLayerService', () => {
  let service: NetCazLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetCazLayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
