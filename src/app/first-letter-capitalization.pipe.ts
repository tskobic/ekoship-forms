import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterCapitalization',
})
export class FirstLetterCapitalizationPipe implements PipeTransform {
  transform(value: string): string {
    const words = value.split(' ');
    const transformedWords = words.map((word) => this.capitalize(word));
    return transformedWords.join(' ');
  }

  capitalize(word: string): string {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }
}
