import { Drink } from './drink.model';

export class Order {
  id: string;
  isCompleted: boolean;
  drinks: Drink[];
  creationDate: Date;
}
