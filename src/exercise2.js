/**
  Imagine you have a set of data in JSON, describing official languages spoken by countries

  Write a function in javascript that:
  - returns the number of countries in the world
  - finds the country with the most official languages, where they officially speak German (de). 
  - that counts all the official languages spoken in the listed countries.
  - to find the country with the highest number of official languages.
  - to find the most common official language(s), of all countries.
*/
import { countriesLanguages } from './data.js';

export const countWorldCountries = () => {
  // 1 - Returns the number of countries in the world
  const countUniqueCountries = [... new Set(countriesLanguages.map(country => country.country))];
  console.log('1 - Number of countries in the world: ', countUniqueCountries.length);
  return countUniqueCountries.length;
};

export const countOfficialLanguagesSpeakDe = () => {
  // 2 - Finds the country with the most official languages, where they officially speak German (de).
  const countOfficialLanguagesSpeakDe = [... new Set(countriesLanguages.filter(countries => countries.languages.includes('de') ))];
  const countMaxOfficialLanguagesSpeakDe = Math.max(...countOfficialLanguagesSpeakDe.map(country => country.languages.length ));
  const getMaxOfficialLanguagesSpeakDe = countriesLanguages.filter(country => country.languages.length === countMaxOfficialLanguagesSpeakDe);
  console.log(
    '2 - The country with the most official languages, where they officially speak German (de):', 
    getMaxOfficialLanguagesSpeakDe [0].country, 
    '('+getMaxOfficialLanguagesSpeakDe [0].languages.join(', ')+')', 
    countMaxOfficialLanguagesSpeakDe+' Languages'
  );
  return [0].languages;
};

export const countAllOfficialLanguages = () => {
  // 3 - Counts all the official languages spoken in the listed countries.
  const countAllOfficialLanguages = countriesLanguages.map((country) => {
    return {
      country:country.country,
      officialLanguagesCount:country.languages.length,
    };
  });
  console.log('3 - Counts all the official languages spoken in the listed countries:');
  console.table(countAllOfficialLanguages);
  return countAllOfficialLanguages;
};

export const findHighestOfficialLanguages = () => {
  // 4 - Find the country with the highest number of official languages.
  const countHighestOfficialLanguages = Math.max(...countriesLanguages.map(country => country.languages.length ));
  const getHighestOfficialLanguages = countriesLanguages.filter(country => country.languages.length === countHighestOfficialLanguages);
  console.log(
    '4 - The country with the highest number of official languages:', 
    getHighestOfficialLanguages [0].country,
    '('+getHighestOfficialLanguages [0].languages.join(', ')+')',
    countHighestOfficialLanguages+' Languages'
  );
  return [0].languages;
};

export const mostCommonLanguages = () => {
  // 5 - Find the most common official language(s), of all countries.
  let combinedArray = [];
  [... new Set(countriesLanguages.map(country => combinedArray.push(...country.languages) ))];
  const mostCommon = getMostFrequent(combinedArray);
  console.log('5 - The most common official language(s), of all countries:', mostCommon.join(', '));
  return mostCommon;
};

function getMostFrequent(array) {
  const hashmap = array.reduce( (index, value) => {
    index[value] = (index[value] || 0 ) + 1;
    return index;
  },{});
  return Object.keys(hashmap).filter(data => {
    return hashmap[data] == Math.max.apply(null, Object.values(hashmap));
  });
}
