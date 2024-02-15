import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-ketentacion',
  standalone: true,
  imports: [],
  templateUrl: './title-ketentacion.component.html',
  styleUrl: './title-ketentacion.component.css'
})
export class TitleKetentacionComponent {
  @Input({required: true}) title: string = '';
  @Input({required: true}) customClasses = '';
}
