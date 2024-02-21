import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudendRegistrationComponent } from './studend-registration.component';

describe('StudendRegistrationComponent', () => {
  let component: StudendRegistrationComponent;
  let fixture: ComponentFixture<StudendRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudendRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudendRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
