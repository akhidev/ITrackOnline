import { TestBed } from '@angular/core/testing';

import { MyProjectsDataService } from './my-projects-data.service';

describe('MyProjectsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyProjectsDataService = TestBed.get(MyProjectsDataService);
    expect(service).toBeTruthy();
  });
});
