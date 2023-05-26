import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsMenuComponent } from './chats-menu.component';

describe('ChatsMenuComponent', () => {
  let component: ChatsMenuComponent;
  let fixture: ComponentFixture<ChatsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
