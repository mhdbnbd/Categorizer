import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterBook'
})
export class FilterBookPipe implements PipeTransform {

  transform(value: string, keyName: string, genre: any): string {
    return _.filter(value,function (o) {
      return o[keyName] === +genre;
    });
  }

}
