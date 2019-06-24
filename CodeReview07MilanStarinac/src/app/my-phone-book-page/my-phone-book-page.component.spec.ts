import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPhoneBookPageComponent } from './my-phone-book-page.component';

describe('MyPhoneBookPageComponent', () => {
  let component: MyPhoneBookPageComponent;
  let fixture: ComponentFixture<MyPhoneBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPhoneBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPhoneBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
