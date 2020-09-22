import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoppedComponent } from './popped.component';

describe('PoppedComponent', () => {
  let component: PoppedComponent;
  let fixture: ComponentFixture<PoppedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoppedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoppedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
