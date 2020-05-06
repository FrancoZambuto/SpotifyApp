import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPlaylistsComponent } from './carousel-playlists.component';

describe('CarouselPlaylistsComponent', () => {
  let component: CarouselPlaylistsComponent;
  let fixture: ComponentFixture<CarouselPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
