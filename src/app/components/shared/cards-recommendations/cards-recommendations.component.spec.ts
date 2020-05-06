import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRecommendationsComponent } from './cards-recommendations.component';

describe('CardsRecommendationsComponent', () => {
  let component: CardsRecommendationsComponent;
  let fixture: ComponentFixture<CardsRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsRecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
