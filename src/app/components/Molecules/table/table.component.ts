import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Input() classTable: string = '';
  @Input() classTd: string = '';
  @Input() classTh: string = '';
  @Input() classTrThead: string = '';
  @Input() classTr: string = '';
  @Input() classThead: string = '';
  @Input() classTbody: string = '';
}
