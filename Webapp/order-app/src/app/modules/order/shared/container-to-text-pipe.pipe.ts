import { Pipe, PipeTransform } from '@angular/core';
import { Containers } from './drink.model';


@Pipe({
  name: 'containerToTextPipe'
})
export class ContainerToTextPipePipe implements PipeTransform {

  transform(value: Containers): string {
    let returnValue = '';
    switch (value) {
      case Containers.Can33:
        returnValue = 'Can 33cl';
        break;
      case Containers.Can25:
        returnValue = 'Can 25cl';
        break;
      case Containers.Bottle33:
        returnValue = 'Bottle 33cl';
        break;
      case Containers.Bottle50:
        returnValue = 'Bottle 50cl';
        break;
      case Containers.Glass:
        returnValue = 'Glass';
        break;
      case Containers.Bottle25:
        returnValue = 'Bottle 25cl';
        break;
    }
    return returnValue;
  }

}
