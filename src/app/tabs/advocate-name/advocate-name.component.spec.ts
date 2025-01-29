import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvocateNameComponent } from './advocate-name.component';

describe('AdvocateNameComponent', () => {
  let component: AdvocateNameComponent;
  let fixture: ComponentFixture<AdvocateNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvocateNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvocateNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
