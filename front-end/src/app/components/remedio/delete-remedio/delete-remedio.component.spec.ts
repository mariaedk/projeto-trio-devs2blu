import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRemedioComponent } from './delete-remedio.component';

describe('DeleteRemedioComponent', () => {
  let component: DeleteRemedioComponent;
  let fixture: ComponentFixture<DeleteRemedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRemedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRemedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
