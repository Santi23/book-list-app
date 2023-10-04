import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1Component } from './component1.component';
import { BookService } from 'src/app/services/book.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Component1Component', () => {
  let component: Component1Component;
  let fixture: ComponentFixture<Component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component1Component ],
      imports: [ HttpClientTestingModule ],
      providers: [ BookService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
