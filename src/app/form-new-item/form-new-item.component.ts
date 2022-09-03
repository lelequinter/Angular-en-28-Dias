import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { City } from '../service/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewItemComponent {
  @Input() className: string = 'btn-primary';
  @Input() label!: string;
  @Input() selection!: City;

  // Esto se debe crear para emitir al componente padre
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  onAddNewItem(item: string): void {
    // console.log(item);
    // Desde aquí se emite el valor capturado al padre
    this.newItemEvent.emit(item);
  }

  onUpdateItem(item: City, change: string): void {
    // console.log('item',item);
    // console.log('change',change);
    const city: City = {
      _id: item._id,
      name: change
    }
    // Desde aquí se emite el valor capturado al padre
    this.updateItemEvent.emit(city);
  }

}
