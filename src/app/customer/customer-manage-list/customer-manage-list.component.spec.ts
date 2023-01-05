import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerManageListComponent } from './customer-manage-list.component';

describe('CustomerManageListComponent', () => {
  let component: CustomerManageListComponent;
  let fixture: ComponentFixture<CustomerManageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerManageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerManageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
