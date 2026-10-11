import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback.component';
import { Router } from '@angular/router';
//import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [FeedbackComponent, BrowserAnimationsModule],
      providers: [{ provide: Router, useValue: router }],
      /*schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]*/
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should reset the form when onSubmit is called', () => {
    component.fbForm.controls['title'].setValue('Test title');
    component.fbForm.controls['description'].setValue('Test description');
    component.fbForm.controls['name'].setValue('Test name');
    component.fbForm.controls['email'].setValue('test@example.com');
    component.fbForm.controls['phone'].setValue('0401234567');

    component.onSubmit();
    expect(component.fbForm.controls['title'].value).toBeNull();
    expect(component.fbForm.controls['description'].value).toBeNull();
    expect(component.fbForm.controls['name'].value).toBeNull();
    expect(component.fbForm.controls['email'].value).toBeNull();
    expect(component.fbForm.controls['phone'].value).toBeNull();
  });

  it('should validate the email field correctly', () => {
    const emailControl = component.fbForm.controls['email'];

    emailControl.setValue('ei-sahkoposti');
    expect(emailControl.valid).toBeFalse();
    emailControl.setValue('test@example.com');
    expect(emailControl.valid).toBeTrue();
  });

  
  it('should validate the name field correctly', () => {
    const nameControl = component.fbForm.controls['name'];

    nameControl.setValue('');
    expect(nameControl.valid).toBeFalse();
    nameControl.setValue('X');
    expect(nameControl.valid).toBeFalse();
    nameControl.setValue('Robotti123');
    expect(nameControl.valid).toBeFalse();
    nameControl.setValue('Testi Nimi');
    expect(nameControl.valid).toBeTrue();
  });


});
