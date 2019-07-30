import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetSynopsisComponent } from './tweet-synopsis.component';

describe('TweetSynopsisComponent', () => {
  let component: TweetSynopsisComponent;
  let fixture: ComponentFixture<TweetSynopsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetSynopsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetSynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
