import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRemedioComponent } from './update-remedio.component';

describe('UpdateRemedioComponent', () => {
  let component: UpdateRemedioComponent;
  let fixture: ComponentFixture<UpdateRemedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRemedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRemedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
