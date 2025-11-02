/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { GetDataService } from './get-data.service';
import { provideHttpClient } from '@angular/common/http';

describe('Service: GetData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataService, provideHttpClient()]
    });
  });

  it('should ...', inject([GetDataService], (service: GetDataService) => {
    expect(service).toBeTruthy();
  }));
});
