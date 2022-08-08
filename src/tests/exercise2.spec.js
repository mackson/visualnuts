import {
  countWorldCountries,
  countOfficialLanguagesSpeakDe,
  countAllOfficialLanguages,
  findHighestOfficialLanguages,
  mostCommonLanguages,
} 
from '../exercise2.js';

describe('Run Exercise 2', () => {
  it('should be able to read the data file with the official languages spoken by countries and process all rules', () => {
    const countWorldCountriesTest = countWorldCountries();
    const countOfficialLanguagesSpeakDeTest = countOfficialLanguagesSpeakDe();
    const countAllOfficialLanguagesTest = countAllOfficialLanguages();
    const findHighestOfficialLanguagesTest = findHighestOfficialLanguages();
    const mostCommonLanguagesTest = mostCommonLanguages();

    expect(countWorldCountriesTest).toBeGreaterThan(0);
    expect(countOfficialLanguagesSpeakDeTest.length).toBeGreaterThan(0);
    expect(countAllOfficialLanguagesTest.length).toBeGreaterThan(0);
    expect(findHighestOfficialLanguagesTest.length).toBeGreaterThan(0);
    expect(mostCommonLanguagesTest.length).toBeGreaterThan(0);
  });
});