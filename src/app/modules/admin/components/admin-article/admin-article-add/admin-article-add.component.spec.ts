import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArticleAddComponent } from './admin-article-add.component';

describe('AdminArticleAddComponent', () => {
  let component: AdminArticleAddComponent;
  let fixture: ComponentFixture<AdminArticleAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminArticleAddComponent]
    });
    fixture = TestBed.createComponent(AdminArticleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
