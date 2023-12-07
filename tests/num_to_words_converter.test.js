const { NumToWordConverter } = require('../src/num_to_words_converter.js')

let convertor;
beforeEach(() => {
    convertor = new NumToWordConverter()
})

test('convert to return zero when 0 is passed', () => {
    expect(convertor.convert('0')).toBe('zero')
})

test('convert to return a correct word for one digit', () => {
    expect(convertor.convert('0')).toBe('zero')
    expect(convertor.convert('1')).toBe('one')
    expect(convertor.convert('2')).toBe('two')
    expect(convertor.convert('3')).toBe('three')
    expect(convertor.convert('4')).toBe('four')
    expect(convertor.convert('5')).toBe('five')
    expect(convertor.convert('6')).toBe('six')
    expect(convertor.convert('7')).toBe('seven')
    expect(convertor.convert('8')).toBe('eight')
    expect(convertor.convert('9')).toBe('nine')
})

test('convert to return correct word for two digit (10-19)', () => {
    expect(convertor.convert('10')).toBe('ten')
    expect(convertor.convert('11')).toBe('eleven')
    expect(convertor.convert('12')).toBe('twelve')
    expect(convertor.convert('13')).toBe('thirteen')
    expect(convertor.convert('14')).toBe('fourteen')
    expect(convertor.convert('15')).toBe('fifteen')
    expect(convertor.convert('16')).toBe('sixteen')
    expect(convertor.convert('17')).toBe('seventeen')
    expect(convertor.convert('18')).toBe('eighteen')
    expect(convertor.convert('19')).toBe('nineteen')
})

test('convert to return correct word(s) for two digits (20 - 99)', () => {
    expect(convertor.convert('20')).toBe('twenty')
    expect(convertor.convert('21')).toBe('twenty-one')
    expect(convertor.convert('22')).toBe('twenty-two')
    expect(convertor.convert('30')).toBe('thirty')
    expect(convertor.convert('31')).toBe('thirty-one')
    expect(convertor.convert('39')).toBe('thirty-nine')
    expect(convertor.convert('40')).toBe('forty')
    expect(convertor.convert('45')).toBe('forty-five')
    expect(convertor.convert('48')).toBe('forty-eight')
    expect(convertor.convert('50')).toBe('fifty')
    expect(convertor.convert('53')).toBe('fifty-three')
    expect(convertor.convert('60')).toBe('sixty')
    expect(convertor.convert('70')).toBe('seventy')
    expect(convertor.convert('80')).toBe('eighty')
    expect(convertor.convert('90')).toBe('ninety')
})

test('convert to return correct words for two digits (00 - 09)', () => {
    expect(convertor.convert('00')).toBe('zero')
    expect(convertor.convert('01')).toBe('one')
    expect(convertor.convert('02')).toBe('two')
    expect(convertor.convert('03')).toBe('three')
    expect(convertor.convert('04')).toBe('four')
    expect(convertor.convert('05')).toBe('five')
    expect(convertor.convert('06')).toBe('six')
    expect(convertor.convert('07')).toBe('seven')
    expect(convertor.convert('08')).toBe('eight')
    expect(convertor.convert('09')).toBe('nine')
})

test('convert to return correct word(s) for three digits (100 - 199)', () => {
    expect(convertor.convert('100')).toBe('one hundred')
    expect(convertor.convert('101')).toBe('one hundred and one')
    expect(convertor.convert('110')).toBe('one hundred and ten')
    expect(convertor.convert('125')).toBe('one hundred and twenty-five')
    expect(convertor.convert('130')).toBe('one hundred and thirty')
    expect(convertor.convert('177')).toBe('one hundred and seventy-seven')
    expect(convertor.convert('199')).toBe('one hundred and ninety-nine')
})

test('convert to return correct word(s) for three digits (200 - 299)', () => {
    expect(convertor.convert('200')).toBe('two hundred')
    expect(convertor.convert('201')).toBe('two hundred and one')
    expect(convertor.convert('210')).toBe('two hundred and ten')
    expect(convertor.convert('250')).toBe('two hundred and fifty')
    expect(convertor.convert('267')).toBe('two hundred and sixty-seven')
    expect(convertor.convert('299')).toBe('two hundred and ninety-nine')
})

test('convert to return correct word(s) for three digits (300 - 999)', () => {
    expect(convertor.convert('300')).toBe('three hundred')
    expect(convertor.convert('301')).toBe('three hundred and one')
    expect(convertor.convert('310')).toBe('three hundred and ten')
    expect(convertor.convert('313')).toBe('three hundred and thirteen')
    expect(convertor.convert('325')).toBe('three hundred and twenty-five')
    expect(convertor.convert('400')).toBe('four hundred')
    expect(convertor.convert('500')).toBe('five hundred')
    expect(convertor.convert('600')).toBe('six hundred')
    expect(convertor.convert('700')).toBe('seven hundred')
    expect(convertor.convert('800')).toBe('eight hundred')
    expect(convertor.convert('900')).toBe('nine hundred')
    expect(convertor.convert('999')).toBe('nine hundred and ninety-nine')
})

test('convert to return correct words for two digits (000 - 099)', () => {
    expect(convertor.convert('000')).toBe('zero')
    expect(convertor.convert('001')).toBe('one')
    expect(convertor.convert('009')).toBe('nine')
    expect(convertor.convert('019')).toBe('nineteen')
    expect(convertor.convert('050')).toBe('fifty')
    expect(convertor.convert('055')).toBe('fifty-five')
    expect(convertor.convert('099')).toBe('ninety-nine')
})


test('convert to return correct word(s) for four digits (1000 - 9999)', () => {
    expect(convertor.convert('1000')).toBe('one thousand')
    expect(convertor.convert('1001')).toBe('one thousand, and one')
    expect(convertor.convert('1050')).toBe('one thousand, and fifty')
    expect(convertor.convert('1100')).toBe('one thousand, one hundred')
    expect(convertor.convert('1111')).toBe('one thousand, one hundred and eleven')
    expect(convertor.convert('9999'))
        .toBe('nine thousand, nine hundred and ninety-nine')
})

test('convert to return correct word(s) for numbers between (1000 - 999999', () => {
    expect(convertor.convert('10000')).toBe('ten thousand')
    expect(convertor.convert('10001')).toBe('ten thousand, and one')
    expect(convertor.convert('100000')).toBe('one hundred thousand')
    expect(convertor.convert('111001')).toBe('one hundred and eleven thousand, and one')
    expect(convertor.convert('527183'))
        .toBe('five hundred and twenty-seven thousand, one hundred and eighty-three')
    expect(convertor.convert('999999'))
        .toBe('nine hundred and ninety-nine thousand, nine hundred and ninety-nine')
})

test('convert to return correct word(s) for number between (1,000,000 - 999,999,999',
    () => {
        expect(convertor.convert('1000000')).toBe('one million')
        expect(convertor.convert('1000001')).toBe('one million, and one')
        expect(convertor.convert('112000001'))
            .toBe('one hundred and twelve million, and one')
        expect(convertor.convert('34687643'))
            .toBe('thirty-four million, six hundred and eighty-seven thousand, six hundred and forty-three')
        expect(convertor.convert('999999999'))
            .toBe('nine hundred and ninety-nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine')
    })

test('convert to return correct word(s) for large numbers', () => {
    expect(convertor.convert('1000000000')).toBe('one billion')
    expect(convertor.convert('1000000001')).toBe('one billion, and one')
    expect(convertor.convert('1000100001'))
        .toBe('one billion, one hundred thousand, and one')
    expect(convertor.convert('12000000000')).toBe('twelve billion')
    expect(convertor.convert('123000000000')).toBe('one hundred and twenty-three billion')
    expect(convertor.convert('123456789123'))
        .toBe('one hundred and twenty-three billion, four hundred and fifty-six million, seven hundred and eighty-nine thousand, one hundred and twenty-three')
    expect(convertor.convert('999999999999'))
        .toBe('nine hundred and ninety-nine billion, nine hundred and ninety-nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine')
})


test('convert to return correct word(s) for decimal point numbers', () => {
    convertor = new NumToWordConverter()
    expect(convertor.convert('0.00')).toBe('zero point zero zero')
    expect(convertor.convert('0.01')).toBe('zero point zero one')
    expect(convertor.convert('0.10')).toBe('zero point one zero')
    expect(convertor.convert('0.101')).toBe('zero point one zero one')
    expect(convertor.convert('0.123456789')).toBe('zero point one two three four five six seven eight nine')
    expect(convertor.convert('.111')).toBe('zero point one one one')
})

test('convert to return correct word(s) for negative numbers', () => {
    expect(convertor.convert('-0')).toBe('negative zero')
    expect(convertor.convert('-0.0')).toBe('negative zero point zero')
    expect(convertor.convert('-0.00')).toBe('negative zero point zero zero')
    expect(convertor.convert('-.111')).toBe('negative zero point one one one')
    expect(convertor.convert('-5')).toBe('negative five')
    expect(convertor.convert('-05')).toBe('negative five')
    expect(convertor.convert('-10')).toBe('negative ten')
    expect(convertor.convert('-48')).toBe('negative forty-eight')
    expect(convertor.convert('-125')).toBe('negative one hundred and twenty-five')
    expect(convertor.convert('-299')).toBe('negative two hundred and ninety-nine')
    expect(convertor.convert('-999')).toBe('negative nine hundred and ninety-nine')
    expect(convertor.convert('-000')).toBe('negative zero')
    expect(convertor.convert('-1000')).toBe('negative one thousand')
    expect(convertor.convert('-9999'))
        .toBe('negative nine thousand, nine hundred and ninety-nine')
    expect(convertor.convert('-10000')).toBe('negative ten thousand')
    expect(convertor.convert('-999999'))
        .toBe('negative nine hundred and ninety-nine thousand, nine hundred and ninety-nine')
    expect(convertor.convert('-1000000')).toBe('negative one million')
    expect(convertor.convert('-999999999'))
    .toBe('negative nine hundred and ninety-nine million, nine hundred and ninety-nine thousand, nine hundred and ninety-nine')
})

test('convert to throws not a number error for invalid input', () => {
    expect(() => convertor.convert('abc')).toThrow('Not a number')
    expect(() => convertor.convert('.')).toThrow('Not a number')
    expect(() => convertor.convert(' .')).toThrow('Not a number')
    expect(() => convertor.convert('. ')).toThrow('Not a number')
    expect(() => convertor.convert(' . ')).toThrow('Not a number')
})

test('convert to throws not in range error for out of range integer part (decimal part have not limit)', () => {
    // the following first two assert verify the extrem upper and lower limits
    expect(convertor.convert('999000000000000000000000000000000')).toBe('nine hundred and ninety-nine nonillion')
    expect(convertor.convert('-999000000000000000000000000000000')).toBe('negative nine hundred and ninety-nine nonillion')
    expect(() => convertor.convert('1000000000000000000000000000000000')).toThrow('The integer part is out of range')
    expect(() => convertor.convert('-1000000000000000000000000000000000')).toThrow('The integer part is out of range')
})

test('convert to return correct words for very large decimal parts and have no limit', () => {
    expect(convertor.convert('.01234567890123456789012345678901234567890123456789')).toBe('zero point zero one two three four five six seven eight nine zero one two three four five six seven eight nine zero one two three four five six seven eight nine zero one two three four five six seven eight nine zero one two three four five six seven eight nine')
})

test('preprocessor', () => {
    // You can use the preprocessor in thousands different ways
    // here is just simple and silly example
    let preprocessor = (number) => {
        return '0'
        // Some use cases for preprocessor
        // -> Clean the string so it only has allowed characters
        // -> Convert a number from one format to English format (from German to English)
        // -> Remove/truncate decimal part
        // -> Return default value if number is not in range
    }

    convertor = new NumToWordConverter(preprocessor) 
    expect(convertor.convert('100')).toBe('zero')

    preprocessor = (number) => {
        if (number.length > 3)
            return '1000'
        return number
    }

    convertor = new NumToWordConverter(preprocessor)
    expect(convertor.convert('10')).toBe('ten')
    expect(convertor.convert('100')).toBe('one hundred')
    expect(convertor.convert('1000')).toBe('one thousand')
    expect(convertor.convert('1001')).toBe('one thousand')
})

test('postprocessor', () => {
    // You can use the postprocessor in thousand different ways
    // here is just simple and silly example
    let preprocessor = null
    let postprocessor = (words, number) => {
        return words.toUpperCase()
        // Some use cases for postprocessor
        // -> Clean the string so it only has allowed characters  point (.) and minus (-)
        // -> Convert a number from one format to English format (from German to English)
        // -> Remove/truncate decimal part
        // -> Return default value if number is not in range
    }

    convertor = new NumToWordConverter(preprocessor, postprocessor) 
    expect(convertor.convert('100')).toBe('ONE HUNDRED')
})










// Tests for Private methods
test('_getNumberOfGroups to return correct number of groups', () => {
    expect(convertor._getNumberOfGroups('')).toBe(0)
    expect(convertor._getNumberOfGroups('0')).toBe(1)
    expect(convertor._getNumberOfGroups('00')).toBe(1)
    expect(convertor._getNumberOfGroups('000')).toBe(1)
    expect(convertor._getNumberOfGroups('0000')).toBe(2)
    expect(convertor._getNumberOfGroups('00000')).toBe(2)
    expect(convertor._getNumberOfGroups('000000')).toBe(2)
    expect(convertor._getNumberOfGroups('0000000')).toBe(3)
})

test('_getTheCountOfCharactersInLeftMostGroup to return the number of character in the left most group', () => {
    expect(convertor._getTheCountOfCharactersInLeftMostGroup('')).toBe(0)
    expect(convertor._getTheCountOfCharactersInLeftMostGroup('0')).toBe(1)
    expect(convertor._getTheCountOfCharactersInLeftMostGroup('00')).toBe(2)
    expect(convertor._getTheCountOfCharactersInLeftMostGroup('000')).toBe(3)
    expect(convertor._getTheCountOfCharactersInLeftMostGroup('0000')).toBe(1)
    expect(convertor._getTheCountOfCharactersInLeftMostGroup('00000')).toBe(2)
    expect(convertor._getTheCountOfCharactersInLeftMostGroup('000000')).toBe(3)
    expect(convertor._getTheCountOfCharactersInLeftMostGroup('0000000')).toBe(1)
})


test('_getCharactersInLeftMostGroup to return the characters in the left most group', () => {
    expect(convertor._getCharactersInLeftMostGroup('')).toBe('')
    expect(convertor._getCharactersInLeftMostGroup('1')).toBe('1')
    expect(convertor._getCharactersInLeftMostGroup('12')).toBe('12')
    expect(convertor._getCharactersInLeftMostGroup('123')).toBe('123')
    expect(convertor._getCharactersInLeftMostGroup('6123')).toBe('6')
    expect(convertor._getCharactersInLeftMostGroup('67123')).toBe('67')
    expect(convertor._getCharactersInLeftMostGroup('678123')).toBe('678')
})


test('_divideNumberIntoGroupsOfNumbers to return groups of numbers as an array', () => {
    expect(convertor._divideNumberIntoGroupsOfNumbers('')).toEqual([])
    expect(convertor._divideNumberIntoGroupsOfNumbers('1')).toEqual(['1'])
    expect(convertor._divideNumberIntoGroupsOfNumbers('12')).toEqual(['12'])
    expect(convertor._divideNumberIntoGroupsOfNumbers('123')).toEqual(['123'])
    expect(convertor._divideNumberIntoGroupsOfNumbers('1234')).toEqual(['1', '234'])
    expect(convertor._divideNumberIntoGroupsOfNumbers('12345')).toEqual(['12', '345'])
    expect(convertor._divideNumberIntoGroupsOfNumbers('123456')).toEqual(['123', '456'])
    expect(convertor._divideNumberIntoGroupsOfNumbers('1234567')).toEqual(['1', '234', '567'])
})

test('_convertGroupsOfNumbersToGroupsOfWords to return words array for  number array', () => {
    expect(convertor._convertGroupsOfNumbersToGroupsOfWords([])).toEqual([])
    expect(convertor._convertGroupsOfNumbersToGroupsOfWords(['0'])).toEqual([''])
    expect(convertor._convertGroupsOfNumbersToGroupsOfWords(['00'])).toEqual([''])
    expect(convertor._convertGroupsOfNumbersToGroupsOfWords(['000'])).toEqual([''])
    expect(convertor._convertGroupsOfNumbersToGroupsOfWords(['1'])).toEqual(['one'])
    expect(convertor._convertGroupsOfNumbersToGroupsOfWords(['65'])).toEqual(['sixty-five'])
    expect(convertor._convertGroupsOfNumbersToGroupsOfWords(['1', '1'])).toEqual(['one', 'and one'])
    expect(convertor._convertGroupsOfNumbersToGroupsOfWords(['100', '570']))
        .toEqual(['one hundred', 'five hundred and seventy'])
    expect(convertor._convertGroupsOfNumbersToGroupsOfWords(['1', '1', '1']))
        .toEqual(['one', 'one', 'and one'])
    expect(convertor._convertGroupsOfNumbersToGroupsOfWords(['176', '777', '942']))
        .toEqual(
            ['one hundred and seventy-six',
                'seven hundred and seventy-seven',
                'nine hundred and forty-two']
        )

    expect(convertor._convertGroupsOfNumbersToGroupsOfWords(['176', '777', '042']))
        .toEqual(
            ['one hundred and seventy-six',
                'seven hundred and seventy-seven',
                'and forty-two']
        )
})

test('_appendSuffixToGroupOfWordsByLevel to append the right suffix', () => {
    expect(convertor._appendSuffixToGroupOfWordsByLevel('', 1)).toBe('')
    expect(convertor._appendSuffixToGroupOfWordsByLevel('', 2)).toBe('')
    expect(convertor
        ._appendSuffixToGroupOfWordsByLevel('one hundred and twenty-three', 0))
        .toBe('one hundred and twenty-three')
    expect(convertor._appendSuffixToGroupOfWordsByLevel('one', 1))
        .toBe('one thousand')

    expect(convertor._appendSuffixToGroupOfWordsByLevel('one', 2))
        .toBe('one million')

    expect(convertor._appendSuffixToGroupOfWordsByLevel('one', 3))
        .toBe('one billion')

    expect(convertor._appendSuffixToGroupOfWordsByLevel('one', 4))
        .toBe('one trillion')
})