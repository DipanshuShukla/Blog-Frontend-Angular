import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniBlogComponent } from './mini-blog.component';

describe('MiniBlogComponent', () => {
  let component: MiniBlogComponent;
  let fixture: ComponentFixture<MiniBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiniBlogComponent]
    });
    fixture = TestBed.createComponent(MiniBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
