import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{ 'background-color': '#7952B3' }">
    {{ label }}
  </button>`,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnChanges, OnDestroy {
  // Estructura para poder recibir el input enviado desde el padre
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }
  ngOnDestroy(): void {
    console.log('Destroy');
  }

  ngOnInit(): void {
    console.log('OnINit');
  }
}
