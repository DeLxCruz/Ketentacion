import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-invoice-modal',
  standalone: true,
  imports: [],
  templateUrl: './invoice-modal.component.html',
})
export class InvoiceModalComponent {
  @ViewChild('myModal1') myModal1!: HTMLDialogElement;

  openModal() {
    this.myModal1.showModal();
  }
}
