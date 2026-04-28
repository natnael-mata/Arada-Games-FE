import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncTelebirrComponent } from './sync-telebirr.component';

describe('SyncTelebirrComponent', () => {
  let component: SyncTelebirrComponent;
  let fixture: ComponentFixture<SyncTelebirrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncTelebirrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncTelebirrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
