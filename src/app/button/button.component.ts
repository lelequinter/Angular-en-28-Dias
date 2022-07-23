import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{ 'background-color': '#7952B3' }">
      {{ label }}
    </button>
    `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  // Estructura para poder recibir el input enviado desde el padre
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;
  constructor() {}


}
