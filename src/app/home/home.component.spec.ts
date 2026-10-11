import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HomeComponent } from './home.component';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [{ provide: Router, useValue: router }],
      /*schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],*/
    }) .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to feedback page when showFeedbackPage is called', () => {
    component.showFeedbackPage();
    expect(router.navigate).toHaveBeenCalledWith(['feedback']);
  });

  it('should have the correct header text', () => {
    expect(component.headerText).toBe('Testing Angular Applications');
  });
});
