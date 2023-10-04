import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { BookService } from 'src/app/services/book.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Book } from 'src/app/models/book.model';

describe('PROBANDO COMPONENTE CART', () => {
  let componentToTest: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let serviceSpy: jasmine.SpyObj<BookService>;

  //let service: BookService;
  const bookList1: Book[] = [
    {
      name: 'Book 1',
      author: 'Author name 1',
      isbn: '165464576456',
      price: 8,
      amount: 0,
    },
    {
      name: 'Book 2',
      author: 'Author name 2',
      isbn: '265464576456',
      price: 10,
      amount: 1,
    },
  ];

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj('BookService', [
      'getBooksFromCart',
      'updateAmountBook',
    ]);

    TestBed.configureTestingModule({
      providers: [{ provide: BookService, useValue: serviceSpy }],
      declarations: [CartComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    //inicializar el ComponenteFixture
    fixture = TestBed.createComponent(CartComponent);
    componentToTest = fixture.componentInstance;
    serviceSpy.updateAmountBook.and.callThrough();
    //service = TestBed.inject(BookService);
    //simulacion de un llamado al metodo ngOnInit
    fixture.detectChanges();
  });

  // test unitario
  it('should create', () => {
    expect(componentToTest).toBeTruthy();
    expect(componentToTest.listCartBook).toEqual([]);
    expect(componentToTest.totalPrice).toEqual(0);
  });

  // test unitario
  it('should getTotalPrice without two books', () => {
    //debugger
    const result = componentToTest.getTotalPrice(bookList1);
    const valueExpected = 10;
    expect(result).toBe(valueExpected);
  });

  it('metodo 2', () => {
    const action: string = 'plus';
    const book1: Book = {
      name: 'Book 1',
      author: 'Author name 1',
      isbn: '165464576456',
      price: 8,
      amount: 0,
    };

    //serviceMock.updateAmountBook
    componentToTest.onInputNumberChange(action, book1);

    //expect(result).toBe(valueExpected);
  });
});

describe('PROBANDO COMPONENTE 2', () => {
  // test unitario
  it('prueba 2', () => {
    const a = 2;
    expect(a).toEqual(2);
  });
});
