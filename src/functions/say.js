import * as InputError from '../shared/input-error-types';

function say(input) {
  const result = [];

  if (!input) {
    throw new Error(InputError.nullUndefinedEmptyError);
  }

  if (!isValidNumber(input)) {
    throw new Error(InputError.notValidNumError);
  }

  if (isDouble(input)) {
    return input;
  }
    
  const inputNum = parseInt(input);

  if (inputNum % 15 === 0) {
    return 'Fizz Buzz';
  }

  if (inputNum % 3 === 0) {
    return 'Fizz';
  }

  if (inputNum % 5 === 0) {
    result.push('Buzz');
  }

  return input;
}

function isValidNumber(input) {
  return (/^-?[0-9]?[0-9\.]+$/).test(input);
}

function isDouble(input) {
  return (/\./).test(input);
}

export { say };