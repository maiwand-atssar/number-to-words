# number-to-words

A lightweight Node.js package that converts numbers to their word representation. This package was developed using Test Driven Development (TDD) practices and can be useful for developers seeking to practice TDD or needing a simple number-to-words conversion functionality.

## Usage

```javascript
const { NumToWordConverter } = require('./number-to-words');

const converter = new NumToWordConverter();

// Example 1: Basic conversion
const words1 = converter.convert('125');
console.log(words1);
// Output: "one hundred and twenty-five"

// Example 2: Large number conversion
const words2 = converter.convert('1000000000');
console.log(words2);
// Output: "one billion"

// Example 3: Decimal number conversion
const words3 = converter.convert('0.101');
console.log(words3);
// Output: "zero point one zero one"

// Example 4: Negative number conversion
const words4 = converter.convert('-125');
console.log(words4);
// Output: "negative one hundred and twenty-five"

// Example 5: Custom preprocessor
// return 1000 for numbers greater than 1000
const preprocessor = (number) => {
  if (number.length > 3) {
    return '1000';
  }
  return number;
};

const convertorWithPreprocessor = new NumToWordConverter(preprocessor);
const words5 = convertorWithPreprocessor.convert('1001');
console.log(words5);
// Output: "one thousand"
const words6 = convertorWithPreprocessor.convert('100');
console.log(words6);
// Output: "one hundred"

// Example 6: Custom postprocessor
const preprocessor = null;
const postprocessor = (words, number) => {
  return words.toUpperCase();
};

const convertorWithPostprocessor = new NumToWordConverter(preprocessor, postprocessor);
const words7 = convertorWithPostprocessor.convert('100');
console.log(words7);
// Output: "ONE HUNDRED"
```
The NumToWordConverter class provides a convert() method that takes a number as a string and returns its word representation. You can create an instance of NumToWordConverter and use the convert() method to convert numbers to words. Additionally, you can customize the conversion process using preprocessor and postprocessor functions.

## License

This package is released under the [MIT License](LICENSE). For more information, please see the [license file](LICENSE).