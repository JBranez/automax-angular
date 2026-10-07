export interface Vehicle {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  category: 'Sedán' | 'SUV' | 'Camioneta' | 'Deportivo';
  image: string;
  description: string;
  features: string[];
  available: boolean;
}
