import { Component, computed, inject, signal } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [VehicleCardComponent],
  templateUrl: './vehicles.component.html'
})
export class VehiclesComponent {
  private readonly vehicleService = inject(VehicleService);
  readonly vehicles = this.vehicleService.getVehicles();
  readonly categories = this.vehicleService.categories;
  readonly selectedCategory = signal('Todos');
  readonly filteredVehicles = computed(() => {
    const category = this.selectedCategory();
    return category === 'Todos' ? this.vehicles() : this.vehicles().filter(v => v.category === category);
  });

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
