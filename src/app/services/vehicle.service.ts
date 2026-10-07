import { Injectable, signal } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle.interface';

@Injectable({ providedIn: 'root' })
export class VehicleService {
  private readonly vehicleList = signal<Vehicle[]>([
    {
      id: 1, name: 'Toyota Corolla XLI', brand: 'Toyota', model: 'Corolla XLI', year: 2025,
      price: 89900, category: 'Sedán', available: true,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=85',
      description: 'Un sedán práctico y cómodo para ciudad, trabajo y viajes de fin de semana.',
      features: ['Motor 2.0 L', 'Automático CVT', '6 airbags', 'Cámara de retroceso']
    },
    {
      id: 2, name: 'Mazda CX-5 High', brand: 'Mazda', model: 'CX-5 High', year: 2025,
      price: 139900, category: 'SUV', available: true,
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85',
      description: 'SUV equilibrada, con buen espacio interior y una conducción agradable.',
      features: ['Motor 2.5 L', 'Asientos de cuero', 'Apple CarPlay', 'Control crucero']
    },
    {
      id: 3, name: 'Ford Ranger XLT', brand: 'Ford', model: 'Ranger XLT', year: 2024,
      price: 159900, category: 'Camioneta', available: true,
      image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1000&q=85',
      description: 'Camioneta pensada para combinar trabajo, carga y escapadas fuera de la ciudad.',
      features: ['4x4', 'Motor 2.0 Bi-Turbo', 'Asistente de descenso', 'Pantalla 12 pulgadas']
    },
    {
      id: 4, name: 'Ford Mustang GT', brand: 'Ford', model: 'Mustang GT', year: 2024,
      price: 245000, category: 'Deportivo', available: true,
      image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42f6?auto=format&fit=crop&w=1000&q=85',
      description: 'Deportivo clásico de alto desempeño para quienes buscan una experiencia distinta.',
      features: ['V8 5.0 L', 'Automático 10 vel.', 'Modos de conducción', 'Frenos deportivos']
    },
    {
      id: 5, name: 'Hyundai Elantra Smart', brand: 'Hyundai', model: 'Elantra Smart', year: 2025,
      price: 82900, category: 'Sedán', available: true,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85',
      description: 'Diseño moderno, consumo eficiente y tecnología para el día a día.',
      features: ['Motor 1.6 L', 'Pantalla multimedia', 'Sensores de parqueo', '6 airbags']
    },
    {
      id: 6, name: 'Jeep Compass Limited', brand: 'Jeep', model: 'Compass Limited', year: 2025,
      price: 149900, category: 'SUV', available: true,
      image: 'https://images.unsplash.com/photo-1542367597-8849ebd3a21c?auto=format&fit=crop&w=1000&q=85',
      description: 'Una SUV con postura aventurera y equipamiento cómodo para familia y ruta.',
      features: ['4x4', 'Pantalla 10.1 pulgadas', 'Techo panorámico', 'Asistencia de carril']
    },
    {
      id: 7, name: 'Chevrolet Silverado LT', brand: 'Chevrolet', model: 'Silverado LT', year: 2024,
      price: 205000, category: 'Camioneta', available: true,
      image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1000&q=85',
      description: 'Gran capacidad y presencia para proyectos exigentes y uso recreativo.',
      features: ['V8 5.3 L', 'Cabina doble', 'Control de remolque', 'Caja de carga amplia']
    },
    {
      id: 8, name: 'Toyota GR Supra', brand: 'Toyota', model: 'GR Supra', year: 2024,
      price: 279000, category: 'Deportivo', available: true,
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1000&q=85',
      description: 'Coupé deportivo de respuesta rápida, diseño bajo y carácter marcadamente dinámico.',
      features: ['Motor 3.0 Turbo', 'Tracción trasera', 'Caja automática', 'Diferencial activo']
    }
  ]);

  readonly categories = signal(['Todos', 'Sedán', 'SUV', 'Camioneta', 'Deportivo']);

  getVehicles() {
    return this.vehicleList.asReadonly();
  }
}
