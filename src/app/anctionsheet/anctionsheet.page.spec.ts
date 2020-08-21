import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnctionsheetPage } from './anctionsheet.page';

describe('AnctionsheetPage', () => {
  let component: AnctionsheetPage;
  let fixture: ComponentFixture<AnctionsheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnctionsheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnctionsheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
