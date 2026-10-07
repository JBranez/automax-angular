import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
  private readonly contactService = inject(ContactService);

  readonly name = signal('');
  readonly email = signal('');
  readonly phone = signal('');
  readonly vehicle = signal('');
  readonly message = signal('');
  readonly sent = signal(false);
  readonly error = signal('');
  readonly savedMessages = this.contactService.savedMessages;

  submit(): void {
    if (!this.name().trim() || !this.email().trim() || !this.message().trim()) {
      this.error.set('Completa nombre, correo y mensaje para enviar tu consulta.');
      this.sent.set(false);
      return;
    }

    this.contactService.addMessage({
      name: this.name().trim(),
      email: this.email().trim(),
      phone: this.phone().trim(),
      vehicle: this.vehicle(),
      message: this.message().trim()
    });

    this.error.set('');
    this.sent.set(true);
    this.name.set('');
    this.email.set('');
    this.phone.set('');
    this.vehicle.set('');
    this.message.set('');
  }

  clearHistory(): void {
    this.contactService.clearMessages();
    this.sent.set(false);
  }
}
