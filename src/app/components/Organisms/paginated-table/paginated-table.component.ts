import { Component, Input } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-paginated-table',
  standalone: true,
  imports: [NgxPaginationModule],
  templateUrl: './paginated-table.component.html',
})
export class PaginatedTableComponent {
  public page!: number;

  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Input() pageSize: number = 1;
}
