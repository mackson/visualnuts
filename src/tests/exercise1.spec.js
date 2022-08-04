describe('Run Exercise 1', () => {
  it('should be able to prints the whole integer numbers and show the terms by the divisibility rules', () => {
    const MAX_COUNT = 100;
    let output = [];
    [...Array(MAX_COUNT)].map((_, number) => {
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
    console.log(output);
    expect(output.length).toEqual(MAX_COUNT);
  });
});