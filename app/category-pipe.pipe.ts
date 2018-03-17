import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {

  transform(items: any, category: string): any {
    if (!items) return [];
    if (!category) return items;
    return items.filter(it => it.categories[0] == category);
  }

}
