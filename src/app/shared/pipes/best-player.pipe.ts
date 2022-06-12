import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bestplayer',
})
export class BestPlayer implements PipeTransform {
  transform(goals: any): any[] {
    return goals.filter(() => goals > 30);
  }
}
