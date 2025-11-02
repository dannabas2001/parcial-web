import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculosComponent } from './vehiculos.component';
import { GetDataService } from '../services/get-data.service';
import { of } from 'rxjs';
import { Vehiculo } from './vehiculo';
import { FormsModule } from '@angular/forms';

describe('VehiculosComponent', () => {
  let component: VehiculosComponent;
  let fixture: ComponentFixture<VehiculosComponent>;
  let getDataService: jasmine.SpyObj<GetDataService>;
  const vehiculosMock: Vehiculo[] = [
    {
      id: 1,
      marca: 'Toyota',
      linea: 'Corolla',
      referencia: 'XEI',
      modelo: 2020,
      kilometraje: 15000,
      imagen: 'toyota-corolla.jpg'
    },
    {
      id: 2,
      marca: 'Honda',
      linea: 'Civic',
      referencia: 'EX',
      modelo: 2021,
      kilometraje: 8000,
      imagen: 'honda-civic.jpg'
    },
    {
      id: 3,
      marca: 'Toyota',
      linea: 'Camry',
      referencia: 'LE',
      modelo: 2022,
      kilometraje: 5000,
      imagen: 'toyota-camry.jpg'
    }
  ];
   beforeEach(async () => {
    const getDataServiceSpy = jasmine.createSpyObj('GetDataService', ['getData']);

    await TestBed.configureTestingModule({
      imports: [VehiculosComponent],
      providers: [
        { provide: GetDataService, useValue: getDataServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculosComponent);
    component = fixture.componentInstance;
    getDataService = TestBed.inject(GetDataService) as jasmine.SpyObj<GetDataService>;
  });
  it('debería cargar 3 vehículos en la tabla', () => {
    getDataService.getData.and.returnValue(of(vehiculosMock));
    
    component.ngOnInit();
    fixture.detectChanges();
    
    expect(component.vehiculos.length).toBe(3);
  });

  it('debería mostrar 3 filas en la tabla y 1 header )', () => {
    getDataService.getData.and.returnValue(of(vehiculosMock));
    
    component.ngOnInit();
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tbody tr');
    const headerRows = compiled.querySelectorAll('thead tr');
    expect(headerRows.length).toBe(1);
    expect(rows.length).toBe(3); 
  });

  it('debería contar correctamente las marcas (2 Toyota, 1 Honda)', () => {
    getDataService.getData.and.returnValue(of(vehiculosMock));
    
    component.ngOnInit();
    fixture.detectChanges();
    
    expect(component.conteoMarcas['Toyota']).toBe(2);
    expect(component.conteoMarcas['Honda']).toBe(1);
  });

  
  ;})
