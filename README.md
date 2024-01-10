# num-to-words-en

A lightweight package that efficiently converts English numbers to their word representation. This package provides a simple and reliable solution for developers who need to convert numbers into words in their applications. It accurately converts the integer part of numbers up to nonillion (10^30) and an infinite number of decimal point numbers.

## Installation

Install the package using npm:

```shell
npm i num-to-words-en
```

## Usage
The num-to-words-en package exports the NumToWordConverter class, which provides a convert() method for converting numbers to their word representation. Here's how you can use it:

### Basic conversion
```javascript
const { NumToWordConverter } = require('num-to-words-en');

const converter = new NumToWordConverter();
console.log(converter.convert('125'));
// Output: "one hundred and twenty-five"
console.log(converter.convert('999'));
// Output: "nine hundred and ninety-nine"
```

### Large number conversion
```javascript
console.log(converter.convert('1000000000'));
// Output: "one billion"
console.log(converter.convert('123456789123'));
// Output: "one hundred and twenty-three billion, four
//          hundred and fifty-six million, seven hundred 
//          and eighty-nine thousand, one hundred and twenty-three"
    
```

### Decimal number conversion
```javascript
console.log(converter.convert('0.101'));
// Output: "zero point one zero one"
```

### Negative number conversion
```javascript
console.log(converter.convert('-125'));
// Output: "negative one hundred and twenty-five"
console.log(converter.convert('-0.111'));
// Output: "negative zero point one one one"
```

### Custom preprocessor
The num-to-words-en package provides a feature called a custom preprocessor, which gives programmers the ability to process the number string before it is passed to the convert method. This allows for additional flexibility and customization in handling specific cases or conditions.

Here is an example of how the custom preprocessor can be used:

```javascript
// return 1000 for numbers greater than 1000
const preprocessor = (number) => {
  if (number.length > 3) {
    return '1000';
  }
  return number;
};

const converter = new NumToWordConverter(preprocessor);
const words5 = converter.convert('1001');
console.log(words5);
// Output: "one thousand"
const words6 = converter.convert('100');
console.log(words6);
// Output: "one hundred"
```
In this example, the custom preprocessor function checks if the length of the number string is greater than 3. If it is, it returns the value '1000'. This means that any number with a length greater than 3 will be converted to "one thousand" when passed through the converter.

By using the custom preprocessor, programmers have the flexibility to apply their own logic or transformations to the number string before it is converted into words. This can be useful in handling specific formatting requirements or applying special rules based on the input.


### Custom postprocessor
The num-to-words-en package also provides a feature called a custom postprocessor, which gives developers the chance to transform the number string returned by the convert method. This allows for further modification or customization of the resulting words.

Here is an example of how the custom postprocessor can be used:
```javascript
const preprocessor = null;
const postprocessor = (words, number) => {
  return words.toUpperCase();
};

const converter = new NumToWordConverter(preprocessor, postprocessor);
const words7 = converter.convert('100');
console.log(words7);
// Output: "ONE HUNDRED"
```
In this example, the custom postprocessor function receives two arguments: words and number. The words argument contains the word representation of the number, and the number argument contains the original number string that was passed to the convert method.

The custom postprocessor function transforms the words string to uppercase using the toUpperCase method. This means that the resulting words will be returned in uppercase letters.

By using the custom postprocessor, developers have the flexibility to apply their own transformations or modifications to the resulting words. This can be useful in applying specific formatting requirements, manipulating the output for further processing, or customizing the result based on specific needs.

### Note
When utilizing the convert() method, it is essential to provide a number string that contains only numeric characters, along with the minus sign (-) for negative numbers or the decimal point (.) for decimal numbers. Remove any extraneous characters, such as commas or spaces, from the number string before passing it to the convert() method. You can achieve this by implementing a preprocessor function that eliminates the specific characters from the number string.

For instance, consider the following example, where the number string includes commas:
```javascript
// Custom preprocessor function to remove commas
const preprocessor = (number) => {
  // Remove commas from the number string
  return number.replace(/,/g, '');
};

// Create an instance of NumToWordConverter with the custom preprocessor
const converter = new NumToWordConverter(preprocessor);

// Convert a number string with commas to words
const words = converter.convert('1,234,567');
console.log(words);
// Output: "one million, two hundred and thirty-four thousand, 
//          five hundred and sixty-seven"
```

## License

This package is released under the [MIT License](LICENSE). For more information, please see the [license file](LICENSE).