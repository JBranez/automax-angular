import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent {
  private readonly service = inject(ReviewService);
  readonly reviews = this.service.getReviews();
  readonly average = this.service.getAverageRating();
}
