
export class Drink {
  id: string;
  name: string;
  container: Containers;
}

export enum Containers {
  Can25 = 1,
  Can33 = 2,
  Bottle33 = 3,
  Bottle50 = 4,
  Glass = 5,
  Bottle25
}
