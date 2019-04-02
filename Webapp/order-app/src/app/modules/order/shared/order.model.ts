import { Drink, Containers } from './drink.model';

export class Order {
  id: string;
  isCompleted: boolean;
  drinks: Drink[];
  creationDate: Date;
}
export interface RequestedDrinkDTO {
  drinkId: string;
  creationDate: Date;
  isCompleted: boolean;
  name: string;
  container: Containers;
}
export interface OrderDTO {
  id: string;
  isCompleted: boolean;
  drinks: RequestedDrinkDTO[];
  creationDate: Date;
}
export interface DrinkRequestCompletionDTO{
  id:string;
  isCompleted: boolean;
}
export interface AllDrinkRequestCompletedDTO{
  isCompleted: boolean;
}