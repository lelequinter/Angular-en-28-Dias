import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `<ul>
      <li
        (click)="onCityClicked(city)"
        [ngClass]="{ 'alert alert-info': city === selection }"
      >
        {{ city }}
      </li>
    </ul>
    `,
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesComponent {
  @Input() city!: string;
  @Input() selection!: string;

  @Output() cityClickedEvent = new EventEmitter<string>();

  onCityClicked(city: string) {
    this.cityClickedEvent.emit(city);
  }

}
