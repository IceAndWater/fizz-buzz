import * as InputError from '../shared/input-error-types';

function say(input) {
  const result = [];

  if (!input) {
    throw new Error(InputError.nullUndefinedEmptyError);
  } else {
    const regEx = /^-?[0-9]?[0-9\.]+$/;
    const regExResult = regEx.test(input);

    if (regExResult === false) {
      throw new Error(InputError.notValidNumError);
    } else {

      if ((/\./).test(input)) {
        return input;
      } else {
        try {
          const inputNum = parseInt(input);

          if (inputNum % 3 === 0) {
            result.push('Fizz');
          }
    
          if (inputNum % 5 === 0) {
            result.push('Buzz');
          }
        } catch (error) {
          throw new Error(InputError.parsingError);
        }
      }
    }
  }

  return result.length > 0 ? result.join(' ') : input;
}

export { say };