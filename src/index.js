import readline from 'node:readline';
import visualNutsNumbers from './exercise1.js';
import {
  countWorldCountries,
  countOfficialLanguagesSpeakDe,
  countAllOfficialLanguages,
  findHighestOfficialLanguages,
  mostCommonLanguages,
} 
from './exercise2.js';

const promptUser = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function recursiveReadLine () {
  promptUser.question(
  `
  \n Insert 1 and press Enter to run Exercise 1 
  \n Insert 2 and press Enter to run Exercise 2 
  \n Insert 0 and press Enter to exit program: `, option => {

    console.log('\n The chosen option was:', option);

    if(option === '0')
      return promptUser.close();
    
    run(option);
    recursiveReadLine();
  });
}

recursiveReadLine();

function run(option){
  switch(option){
    case '1':
      visualNutsNumbers(100);
      break;
    case '2':
      console.log('\n### Starting Exercise 2 ### \n');
      countWorldCountries();
      countOfficialLanguagesSpeakDe();
      countAllOfficialLanguages();
      findHighestOfficialLanguages();
      mostCommonLanguages();
      break;
    default:
      console.log('\nInvalid Option');
  }
}

promptUser.on('close', function () {
  console.log('\nBye Bye!');
  process.exit(0);
});
