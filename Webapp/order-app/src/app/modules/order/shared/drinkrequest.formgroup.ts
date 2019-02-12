import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Drink } from './drink.model';

export class DrinkRequestFormGroup extends FormGroup {

  drinkControl: FormControl;
  constructor(private drinks: Drink[]) {
    super({});
    this.drinkControl = new FormControl('', [Validators.required]);
    this.addControl('drinkControl', this.drinkControl);
  }

  getSelectedDrinks(): Drink[] {
    const selectedValues = this.drinkControl.value;
    return this.drinks.filter(d => selectedValues.includes(d.name));
  }

  updateDrinks(updatedDrinks: Drink[]) {
    this.drinks = updatedDrinks;
  }
}
