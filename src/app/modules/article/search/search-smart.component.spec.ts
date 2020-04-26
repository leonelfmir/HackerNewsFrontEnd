import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSmartComponent } from './search-smart.component';

describe('SearchSmartComponent', () => {
  let component: SearchSmartComponent;
  let fixture: ComponentFixture<SearchSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
