import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
})
export class FormNewItemComponent {
  @Input() className: string = 'btn-primary';
  @Input() label!: string;

  // Esto se debe crear para emitir al componente padre
  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string): void {
    console.log(item);
    // Desde aquí se emite el valor capturado al padre
    this.newItemEvent.emit(item);
  }
}
