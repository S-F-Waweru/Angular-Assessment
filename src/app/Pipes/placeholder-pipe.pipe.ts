import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholderPipe',
  standalone: true
})
export class PlaceholderPipePipe implements PipeTransform {

  transform(value: string, limit: number) {
    value = value.trim()
    if (value == "") {
       let message = "The input cannot be empty"
      return message
    } else if (value.length <= limit) {
      let message = "The input is less that the limit : " + limit
      return message
    }
    return ""
  }

}
