import { TestBed } from '@angular/core/testing';

import { AdminArticleService } from './admin-article.service';

describe('ArticleService', () => {
  let service: AdminArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
