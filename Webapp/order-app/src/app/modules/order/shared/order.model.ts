import { Drink } from './drink.model';

export class Order {
  isCompleted: boolean;
  drinks: Drink[];
  creationDate: Date;
}
