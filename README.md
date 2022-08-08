# Visual Nuts Exercises

General notes: For all exercises we expect actual runnable javascript code and test to be
provided. Imagine that all code you provide here is of the highest importance for the company,
and target core features of our product. So the provided code should be up to production
level quality.

## Exercise 1:
Write or describe an algorithm that prints the whole integer numbers to the console, start
from the number 1, and print all numbers going up to the number 100.

However, when the number is divisible by 3, do not print the number, but print the word
'Visual'. If the number is divisible by 5, do not print the number, but print 'Nuts'. And for
all numbers divisible by both (eg: the number 15) the same, but print 'Visual Nuts'.

How will you keep this code safe from bugs? Show how you would guarantee that this code
keeps working when developers start making small feature adjustments. (Maybe we would
want to print the first 500 numbers, ...)

## Exercise 2:
Imagine you have a set of data in JSON, describing official languages spoken by countries,
as such:

```
[
    {
        country:"US",
        languages: ["en"]
    },
    {
        country:"BE",
        languages: ["nl","fr","de"]
    },
    {
        country:"NL",
        languages: ["nl"]
    },
    {
        country:"DE",
        languages: ["de"]
    },
    {
        country:"ES",
        languages: ["es"]
    }
]
```

### Write a function in javascript that:

- returns the number of countries in the world
- finds the country with the most official languages, where they officially speak German (de). 
- that counts all the official languages spoken in the listed countries.
- to find the country with the highest number of official languages.
- to find the most common official language(s), of all countries.

# Resolution of the Exercises

- First of all you need to install Node 18 or above to run the app, then run the commands below
```npm install```
```npm start```
- When the application starts choose one of the options
```
  Insert 1 and press Enter to run Exercise 1 
  Insert 2 and press Enter to run Exercise 2 
  Insert 0 and press Enter to exit program: 0
```
- Run Unity tests with Jest, 
```npm run test```

### How will you keep this code safe from bugs?

We know that any software will always have bugs. The trick is to minimize the number of bugs and to thoroughly test and debug your code before you hand it over to the test team. Understanding well the business rules and implementing good code development practices like <b>Clean Code</b> and <b>SOLID Principles</b> helps a lot to keep the application stable, simple and modular.

### Other Strategies

- Break the code into small units (functions or classes) that each do only one job.
- Implement unit tests to detect errors in the early stages of development and correct them.
- Using functional programming is another set of techniques that I have found to be very effective in achieving simplicity and modularity.