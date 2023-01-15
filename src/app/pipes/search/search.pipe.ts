import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (args[1] !== ''){
      const coincidences = Object.keys(args[0]).filter((item) => {
          return similar(args[1], args[0][item]) >= 50;
      });
      return (coincidences.length > 0) ? value : null;
    }else{
      return value;
    }
  }
}

function similar(a, b) {
  let equivalency = 0;
  if (a !== null && b !== null){
    const maxLength = (a.length < b.length) ? b.length : a.length;
    const minLength = (a.length > b.length) ? b.length : a.length;
    for (let i = 0; i < minLength; i++) {
      if (a[i] === b[i]) {
        equivalency++;
      }
    }
    const weight = equivalency / maxLength;
    return (weight * 100);
  }
}
