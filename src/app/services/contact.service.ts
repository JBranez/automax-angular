import { Injectable, signal } from '@angular/core';
import { ContactMessage } from '../interfaces/contact-message.interface';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly storageKey = 'automax-contact-messages';
  private readonly messages = signal<ContactMessage[]>(this.load());

  readonly savedMessages = this.messages.asReadonly();

  addMessage(message: Omit<ContactMessage, 'id' | 'createdAt'>): void {
    const next: ContactMessage = {
      ...message,
      id: Date.now(),
      createdAt: new Date().toLocaleString('es-PE')
    };

    const updated = [next, ...this.messages()];
    this.messages.set(updated);
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
  }

  clearMessages(): void {
    this.messages.set([]);
    localStorage.removeItem(this.storageKey);
  }

  private load(): ContactMessage[] {
    try {
      const raw = localStorage.getItem(this.storageKey);
      return raw ? JSON.parse(raw) as ContactMessage[] : [];
    } catch {
      return [];
    }
  }
}
