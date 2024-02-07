import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleKetentacionComponent } from './title-ketentacion.component';

describe('TitleKetentacionComponent', () => {
  let component: TitleKetentacionComponent;
  let fixture: ComponentFixture<TitleKetentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleKetentacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleKetentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
