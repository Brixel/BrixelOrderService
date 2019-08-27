import { FormGroup, FormControl, Validators } from '@angular/forms';


export class MessageBoardFormGroup extends FormGroup {
  public messageControl: FormControl;
  constructor() {
    super({});
    this.messageControl = new FormControl('', [Validators.required]);
    this.addControl('messageControl', this.messageControl);
  }

  getMessage() {
    return this.messageControl.value;
  }
  clearMessage() {
    this.messageControl.reset();
  }

}
