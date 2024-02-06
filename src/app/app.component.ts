import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from './components/Atoms/title/title.component';
import { InputComponent } from './components/Atoms/input/input.component';
import { ButtonComponent } from './components/Atoms/button/button.component';
import { PaginatedTableComponent } from './components/Organisms/paginated-table/paginated-table.component';
import { TableComponent } from './components/Molecules/table/table.component';
import { InvoiceModalComponent } from './components/Organisms/invoice-modal/invoice-modal.component';
import { SidebarComponent } from './components/Organisms/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TitleComponent,
    InputComponent,
    ButtonComponent,
    PaginatedTableComponent,
    TableComponent,
    InvoiceModalComponent,
    SidebarComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Ketentacion';

  data = [
    {
      Nombre: 'Vaso con Tapa',
      Codigo: '001',
      Tipo: 'Vasos',
      Precio: '25,300',
      Stock: '100',
    },
    {
      Nombre: 'Vaso sin Tapa',
      Codigo: '002',
      Tipo: 'Vasos',
      Precio: '20,000',
      Stock: '100',
    },
    {
      Nombre: 'Tenedor',
      Codigo: '003',
      Tipo: 'Cubiertos',
      Precio: '10,000',
      Stock: '100',
    },
    {
      Nombre: 'Cuchara',
      Codigo: '004',
      Tipo: 'Cubiertos',
      Precio: '10,000',
      Stock: '100',
    },
    {
      Nombre: 'Plato',
      Codigo: '005',
      Tipo: 'Platos',
      Precio: '30,000',
      Stock: '100',
    },
    {
      Nombre: 'Cuchillo',
      Codigo: '006',
      Tipo: 'Cubiertos',
      Precio: '10,000',
      Stock: '100',
    },
    {
      Nombre: 'Taza',
      Codigo: '007',
      Tipo: 'Tazas',
      Precio: '25,000',
      Stock: '100',
    },
    {
      Nombre: 'Copa',
      Codigo: '008',
      Tipo: 'Copas',
      Precio: '25,000',
      Stock: '100',
    },
    {
      Nombre: 'Jarra',
      Codigo: '009',
      Tipo: 'Jarras',
      Precio: '25,000',
      Stock: '100',
    },
    {
      Nombre: 'Cenicero',
      Codigo: '010',
      Tipo: 'Ceniceros',
      Precio: '25,000',
      Stock: '100',
    },
  ];

  data2 = [
    {
      Producto: 'Vaso con Tapa',
      Precio: '25,300',
      Cantidad: 'Vasos',
      Total: '100',
    }
  ];

  modalVisible = false;

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }

}
