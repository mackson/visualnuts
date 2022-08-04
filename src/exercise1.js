/**
  Write or describe an algorithm that prints the whole integer numbers to the console, start
  from the number 1, and print all numbers going up to the number 100.

  However, when the number is divisible by 3, do not print the number, but print the word
  'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for
  all numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.

  How will you keep this code safe from bugs? Show how you would guarantee that this code
  keeps working when developers start making small feature adjustments. (Maybe we would
  want to print the first 500 numbers, ...)
*/
export default function visualNutsNumbersApi(maxCount) {
  console.log('\n ### Starting Exercise 1 ### \n');
  let output = [];
  [...Array(maxCount)].map((_, number) => {
    let processNumber = number + 1;
    let word = '';
    
    if(processNumber % 3 === 0)
      word = 'Visual';

    if(processNumber % 5 === 0)
      word = 'Nuts';

    if(processNumber % 3 === 0 && processNumber % 5 === 0)
      word = 'Visual Nuts';

    output.push(word || processNumber);
  });
  console.log(output.join(', '));
  return output;
}