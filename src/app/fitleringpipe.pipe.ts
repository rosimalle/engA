import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fitleringpipe'
})
export class FitleringpipePipe implements PipeTransform {

  transform(storeData, filterText): any {
    let condiction = y => y.title.toLowerCase().search(filterText.toLowerCase()) > -1
    if (!filterText)
      return storeData
    return storeData.filter(condiction)
  }

}
