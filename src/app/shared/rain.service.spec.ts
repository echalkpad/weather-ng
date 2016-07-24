/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { RainService } from './rain.service';

describe('Service: Rain', () => {
  beforeEach(() => {
    addProviders([RainService]);
  });

  it('should ...',
    inject([RainService],
      (service: RainService) => {
        expect(service).toBeTruthy();
      }));
});
