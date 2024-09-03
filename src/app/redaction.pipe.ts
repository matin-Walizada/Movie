import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'redaction'
})
export class RedactionPipe implements PipeTransform {

  transform(value: string, visibleDigits: number = 4): string {
    if (!value) return '';
    const length = value.length;
    if (length <= visibleDigits) return value;
    return '*'.repeat(length - visibleDigits) + value.slice(-visibleDigits);
  }

}
