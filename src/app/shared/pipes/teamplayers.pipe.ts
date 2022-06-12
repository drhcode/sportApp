import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamplayers',
})
export class TeamplayersPipe implements PipeTransform {
  transform(value: Object): Array<string> {
    return Object.keys(value);
  }
}
