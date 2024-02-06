import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {

  @Input() icon: string = '';
  @Input() classesButton: string = '';
  @Input() classesIcon: string = '';
  @Input() text: string = '';

  constructor() {}
  ngOnInit() {}
}
