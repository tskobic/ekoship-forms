import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysSinceCalculator',
})
export class DaysSinceCalculatorPipePipe implements PipeTransform {
  transform(value: Date): string {
    return `${this.calculateDayOfYear(value)}; ${this.calculateDayOfMonth(
      value
    )}; ${this.calculateDayOfWeek(value)}.`;
  }

  calculateDayOfYear(now: Date): string {
    const start = new Date(now.getFullYear(), 0, 0);
    const diff =(now.valueOf() - start.valueOf()) +
      ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);

    return `Day of the year: ${day}`;
  }

  calculateDayOfMonth(now: Date): string {
    return `Day of the month: ${now.getDate().toString()}`;
  }

  calculateDayOfWeek(now: Date): string {
    return `Day of the week: ${now.getDay().toString()}`;
  }
}
