import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HeaderService } from './header.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let headerServiceMock: any;

  beforeEach(async () => {
    headerServiceMock = jasmine.createSpyObj(['getMessage']);

    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{ provide: HeaderService, useValue: headerServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('CreateTask_WhenCreateTaskCalled_HeaderInputIsCleared', () => {
    //Arrange
    const input = 'abc';

    //Act
    component.createTask(input);

    //Assert
    expect(component.Header.length === 0).toBeTruthy();
  });

  it('CreateTask_WhenCreateTaskCalled_InputIsSentToTheHeaderService', () => {
    //Arrange
    const input = 'abc';

    //Act
    component.createTask(input);

    //Assert
    expect(headerServiceMock.getMessage).toHaveBeenCalled();
  });
});
