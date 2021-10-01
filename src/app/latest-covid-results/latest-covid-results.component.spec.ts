import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCovidResultsComponent } from './latest-covid-results.component';

describe('LatestCovidResultsComponent', () => {
  let component: LatestCovidResultsComponent;
  let fixture: ComponentFixture<LatestCovidResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestCovidResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestCovidResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
