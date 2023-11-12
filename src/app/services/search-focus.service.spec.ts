import { TestBed } from '@angular/core/testing';

import { SearchFocusService } from './search-focus.service';

describe('SearchFocusService', () => {
  let service: SearchFocusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchFocusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
