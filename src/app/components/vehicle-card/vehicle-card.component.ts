import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Vehicle } from '../../interfaces/vehicle.interface';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './vehicle-card.component.html'
})
export class VehicleCardComponent {
  readonly vehicle = input.required<Vehicle>();
}
