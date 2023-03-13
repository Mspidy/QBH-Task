import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadContactComponent } from './download-contact.component';

describe('DownloadContactComponent', () => {
  let component: DownloadContactComponent;
  let fixture: ComponentFixture<DownloadContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
