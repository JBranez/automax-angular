import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AboutComponent } from './components/about/about.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, VehiclesComponent, PromotionsComponent, ReviewsComponent, AboutComponent, ContactFormComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
