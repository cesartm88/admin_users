import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let coincidences = Object.keys(args[0]).filter((item) => {
       return similar(args[1],args[0][item]) >= 50;
    });
    return (coincidences.length > 0)?value:null;
  }

}

function similar(a,b) {
  var lengthA = a.length;
  var lengthB = b.length;
  var equivalency = 0;
  var minLength = (a.length > b.length) ? b.length : a.length;    
  var maxLength = (a.length < b.length) ? b.length : a.length;    
  for(var i = 0; i < minLength; i++) {
      if(a[i] == b[i]) {
          equivalency++;
      }
  }


  var weight = equivalency / maxLength;
  return (weight * 100);
}