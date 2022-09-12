import { FirstLetterCapitalizationPipe } from './first-letter-capitalization.pipe';

describe('FirstLetterCapitalizationPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstLetterCapitalizationPipe();
    expect(pipe).toBeTruthy();
  });
});
