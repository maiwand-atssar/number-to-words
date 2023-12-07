const NUMBER_TO_WORD = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
    '100': 'one hundred',
    '200': 'two hundred',
    '300': 'three hundred',
    '400': 'four hundred',
    '500': 'five hundred',
    '600': 'six hundred',
    '700': 'seven hundred',
    '800': 'eight hundred',
    '900': 'nine hundred',
}

const LEVELS = {
    0: '',
    1: ' thousand',
    2: ' million',
    3: ' billion',
    4: ' trillion',
    5: ' quadrillion',
    6: ' quintillion',
    7: ' sextillion',
    8: ' septillion',
    9: ' octillion',
    10: ' nonillion'
}


const ZERO = 'zero'
const NUMBERS_GROUP_SIZE = 3
const DECIMAL_POINT = 'point'
const NEGATIVE = 'negative'
const NOT_A_NUMBER_MESSAGE = 'Not a number'
const INTEGER_OUT_OF_RANGE_MESSAGE = 'The integer part is out of range'


class NumToWordConverter {

    constructor(preprocesser = null, postprocessor = null) {
        this._preprocesser = preprocesser
        this._postprocessor = postprocessor
        this._decimalPoint = '.'
    }

    convert(number) {
        number = this._preprocess(number)

        number = this._cleanNumber(number)

        if (this._isNotANumber(number))
            throw new Error(NOT_A_NUMBER_MESSAGE)

        if (this._numberIsEmpty(number))
            return ''

        let [integerPart, decimalPart] = this._splitIntoIntegerAndDecimalParts(number)

        if (this._theIntegerPartIsOutOfRange(integerPart))
            throw new Error(INTEGER_OUT_OF_RANGE_MESSAGE)

        let integerPartWords = this._getWordsForIntegerPartOfTheNumber(integerPart)
        let decimalPartWords = this._getWordsForDecimalPartOfTheNumber(decimalPart)
        let words = this._combineTheNumberPartsWords(integerPartWords, decimalPartWords)

        words = this._postprocess(words, number)

        return words
    }

    _preprocess(number) {
        if (this._preprocesser) {
            number = this._preprocesser(number)
        }
        return number
    }

    _cleanNumber(number) {
        number = String(number)
        return number.replace(/[,+]/g, '')
    }

    _isNotANumber(number) {
        return parseFloat(number).toString() == NaN.toString()
    }

    _numberIsEmpty(number) {
        number = number.trim()
        if (number === '') {
            return true
        }
        let [integerPart, decimalPart] = this._splitIntoIntegerAndDecimalParts(number)
        if (integerPart === '' && decimalPart === '') {
            return true
        }
    }

    _splitIntoIntegerAndDecimalParts(number) {
        return number.split(this._decimalPoint)
    }

    _theIntegerPartIsOutOfRange(integerPart) {
        return (integerPart.length > 33 && integerPart[0] !== '-') ||
            (integerPart.length > 34 && integerPart[0] === '-')
    }

    _getWordsForIntegerPartOfTheNumber(integerPart) {
        let words = ''

        // sepcial case
        if (parseInt(integerPart) === 0 || integerPart === '' || integerPart === '-') {
            words = ZERO
        } else {
            words = this._getWordsForNumber(integerPart)
        }

        if (this._numberIsNegative(integerPart)) {
            words = NEGATIVE + ' ' + words
        }
        return words
    }

    _getWordsForDecimalPartOfTheNumber(decimalPart = '') {
        let decimalPartWords = ' '
        for (let number of decimalPart) {
            decimalPartWords += NUMBER_TO_WORD[number] + ' '
        }
        return decimalPartWords.trim()
    }

    _combineTheNumberPartsWords(integerPartWords, decimalPartWords) {
        let words = ''
        if (decimalPartWords !== '') {
            words = integerPartWords + ' ' + DECIMAL_POINT + ' ' + decimalPartWords
        } else {
            words = integerPartWords
        }
        return words
    }

    _postprocess(words) {
        if (this._postprocessor) {
            words = this._postprocessor(words)
        }
        return words
    }

    _getWordsForNumber(number) {
        if (this._numberIsNegative(number)) {
            number = number.substr(1)
        }
        let groupsOfNumbers = this._divideNumberIntoGroupsOfNumbers(number)
        let groupsOfWords = this._convertGroupsOfNumbersToGroupsOfWords(groupsOfNumbers)
        let words = this._joinGroupsOfWords(groupsOfWords)
        return words
    }

    _numberIsNegative(number) {
        return number[0] === '-'
    }

    _divideNumberIntoGroupsOfNumbers(number) {
        let numberOfGroups = this._getNumberOfGroups(number)
        let groups = []
        for (let i = 0; i < numberOfGroups; i++) {
            let chars = this._getCharactersInLeftMostGroup(number)
            groups.push(chars)
            number = number.substr(chars.length)
        }
        return groups
    }

    _convertGroupsOfNumbersToGroupsOfWords(groupsOfNumbers) {
        let words = []
        for (let i = 0; i < groupsOfNumbers.length; i++) {
            if (this._theLastNumberNeedsAnAndWord(groupsOfNumbers, i)) {
                words.push('and ' + this._getWordsForAGroupOfNumbers(groupsOfNumbers[i]))
            } else {
                words.push(this._getWordsForAGroupOfNumbers(groupsOfNumbers[i]))
            }
        }
        return words
    }

    _joinGroupsOfWords(groupsOfWords) {
        let numOfGroups = groupsOfWords.length
        let words = ''
        for (let i = 0; i < numOfGroups; i++) {
            let level = (numOfGroups - 1) - i
            let word = groupsOfWords[i]
            word = this._appendSuffixToGroupOfWordsByLevel(word, level)
            words += word !== '' ? ' ' + word + ',' : ''
        }
        words = words.trim()
        words = this._trimCommas(words)
        return words
    }

    _trimCommas(words) {
        if (words[words.length - 1] === ',') {
            return this._trimCommas(words.substr(0, words.length - 1))
        }
        return words
    }

    _getNumberOfGroups(number) {
        return Math.ceil(number.length / NUMBERS_GROUP_SIZE)
    }

    _getCharactersInLeftMostGroup(number) {
        let numberOfChars = this._getTheCountOfCharactersInLeftMostGroup(number)
        return number.substr(0, numberOfChars)
    }

    _theLastNumberNeedsAnAndWord(numbers, i) {
        return numbers.length > 1 &&
            i == (numbers.length - 1) &&
            parseInt(numbers[i]) > 0 &&
            parseInt(numbers[i]) < 100;
    }

    _getWordsForAGroupOfNumbers(groupOfNumbers) {
        if (parseInt(groupOfNumbers) === 0) {
            return ''
        }
        if (groupOfNumbers.length == 1 && parseInt(groupOfNumbers) > 0) {
            return this._getWordsForOneDigits(groupOfNumbers)
        } else if (groupOfNumbers.length > 1) {
            return this._getWordsForTwoOrMoreDigits(groupOfNumbers)
        }
    }

    _appendSuffixToGroupOfWordsByLevel(words, level) {
        if (words === '') {
            return ''
        }
        return words + LEVELS[level]
    }

    _getTheCountOfCharactersInLeftMostGroup(number) {
        if (number.length % NUMBERS_GROUP_SIZE === 0 && number.length !== 0) {
            return 3
        }
        return number.length % NUMBERS_GROUP_SIZE
    }

    _getWordsForOneDigits(groupOfNumbers) {
        return NUMBER_TO_WORD[groupOfNumbers]
    }

    _getWordsForTwoOrMoreDigits(groupOfNumbers) {
        let numericForm = parseInt(groupOfNumbers)
        if (numericForm > 99) {
            let words = this._getWordForTheHundredPart(groupOfNumbers)
            let remaining = groupOfNumbers.substr(1)
            if (remaining !== '00') {
                words += ' and ' + this._getWordsForTwoDigits(remaining)
            }
            return words
        } else {
            groupOfNumbers = String(numericForm)
            return this._getWordsForTwoDigits(groupOfNumbers)
        }
    }

    _getWordForTheHundredPart(groupOfNumbers) {
        let hundredPart = groupOfNumbers[0] + '00'
        return NUMBER_TO_WORD[hundredPart]
    }

    _getWordsForTwoDigits(groupOfNumbers) {
        let numericForm = parseInt(groupOfNumbers)
        if (numericForm > 20 && numericForm % 10 !== 0) {
            return NUMBER_TO_WORD[groupOfNumbers[0] + '0'] + '-' + NUMBER_TO_WORD[groupOfNumbers[1]]
        } else {
            return NUMBER_TO_WORD[numericForm]
        }
    }
}

module.exports = {
    NumToWordConverter
}