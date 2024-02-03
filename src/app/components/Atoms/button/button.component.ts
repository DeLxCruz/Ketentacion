import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {

  @Input() icon: string = '';
  @Input() classesButton: string = '';
  @Input() classesIcon: string = '';
  @Input({required: true}) text: string = '';

  constructor() {}
  ngOnInit() {}
}
