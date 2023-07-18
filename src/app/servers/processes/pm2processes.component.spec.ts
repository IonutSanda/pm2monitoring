import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pm2processesComponent } from './pm2processes.component';

describe('ServiceComponent', () => {
  let component: Pm2processesComponent;
  let fixture: ComponentFixture<Pm2processesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pm2processesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pm2processesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
