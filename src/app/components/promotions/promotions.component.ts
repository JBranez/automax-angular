import { Component, inject } from '@angular/core';
import { PromotionService } from '../../services/promotion.service';

@Component({
  selector: 'app-promotions',
  standalone: true,
  templateUrl: './promotions.component.html'
})
export class PromotionsComponent {
  private readonly service = inject(PromotionService);
  readonly promotions = this.service.getPromotions();
}
