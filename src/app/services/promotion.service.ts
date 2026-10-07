import { Injectable, signal } from '@angular/core';
import { Promotion } from '../interfaces/promotion.interface';

@Injectable({ providedIn: 'root' })
export class PromotionService {
  private readonly promotions = signal<Promotion[]>([
    { id: 1, title: 'Cuota inicial desde 20%', description: 'yyyyyyyyyyyyyy', discount: 10, note: 'Modelos seleccionados', endDate: '31 oct. 2026' },
    { id: 2, title: 'Mantenimiento de cortesía', description: 'Llévate el primer mantenimiento sin costo al comprar uno de nuestros SUV seleccionados.', discount: 15, note: 'Incluye revisión preventiva', endDate: '15 nov. 2026' },
    { id: 3, title: 'Bonificación por retoma', description: 'Recibe una bonificación especial al entregar tu vehículo actual como parte de pago.', discount: 8, note: 'Según evaluación de la unidad', endDate: '30 nov. 2026' }
  ]);

  getPromotions() {
    return this.promotions.asReadonly();
  }
}
