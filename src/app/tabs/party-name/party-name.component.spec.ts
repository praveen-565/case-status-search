import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyNameComponent } from './party-name.component';

describe('PartyNameComponent', () => {
  let component: PartyNameComponent;
  let fixture: ComponentFixture<PartyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
