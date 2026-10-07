import { Injectable, signal } from '@angular/core';
import { Review } from '../interfaces/review.interface';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private readonly reviews = signal<Review[]>([
    { id: 1, customer: 'Andrea M.', vehicle: 'Toyota Corolla XLI', rating: 5, comment: 'La atención fue directa y sin vueltas. Me ayudaron a comparar dos modelos y salí con el que realmente necesitaba.', date: '12/09/2026' },
    { id: 2, customer: 'Luis R.', vehicle: 'Ford Ranger XLT', rating: 5, comment: 'Muy buena experiencia con la prueba de manejo. El equipo explicó bien el equipamiento de la camioneta.', date: '28/08/2026' },
    { id: 3, customer: 'Mariana C.', vehicle: 'Mazda CX-5 High', rating: 4, comment: 'blah blah blah', date: '04/08/2026' },
    { id: 4, customer: 'Carlos P.', vehicle: 'Toyota GR Supra', rating: 5, comment: 'blah blah blah', date: '21/07/2026' }
  ]);

  getReviews() {
    return this.reviews.asReadonly();
  }

  getAverageRating(): number {
    const list = this.reviews();
    return list.reduce((total, item) => total + item.rating, 0) / list.length;
  }
}
