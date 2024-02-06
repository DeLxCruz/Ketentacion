import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
})
export class InputComponent {

  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() classesInput: string = '';
  @Input() classesIcon: string = '';
  @Input() classesDiv: string = '';
  @Input() icon: string = '';

  constructor() {}
  ngOnInit() {}

}
