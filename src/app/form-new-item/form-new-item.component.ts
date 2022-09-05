import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { City } from '../service/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormNewItemComponent implements AfterViewInit {
  @Input() className: string = 'btn-primary';
  @Input() label!: string;
  @Input() selection!: City;
  @ViewChild('newItem') newItem!: ElementRef;

  // Esto se debe crear para emitir al componente padre
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  // ngOnInit(): void {
  //   console.log('this.newItem', this.newItem);
  // }

  ngAfterViewInit(): void {
    console.log('this.newItem', this.newItem);
    this.newItem.nativeElement.focus();
  }

  onAddNewItem(): void {
    // console.log(item);
    // Desde aquí se emite el valor capturado al padre
    this.newItemEvent.emit(this.newItem.nativeElement.value);
    this.onClear();
  }

  onUpdateItem(): void {
    // console.log('item',item);
    // console.log('change',change);
    const city: City = {
      _id: this.selection._id,
      name: this.newItem.nativeElement.value,
    };
    // Desde aquí se emite el valor capturado al padre
    this.updateItemEvent.emit(city);
    this.onClear();
  }

  private onClear(): void {
    this.newItem.nativeElement.value = '';
  }
}
