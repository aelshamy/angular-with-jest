import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// jasmine.createSpyObj('name', ['key']) --> jest.fn({key: jest.fn()})
// jasmine.createSpy('name') --> jest.fn()
// and.returnValue() --> mockReturnValue()
// spyOn(...).and.callFake(() => {}) --> jest.spyOn(...).mockImplementation(() => {})
// Asymmetric matchers: jasmine.any, jasmine.objectContaining, etc. --> expect.any, expect.objectContaining

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'angular-with-jest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-with-jest');
  });

  test('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-with-jest!');
  });
});
