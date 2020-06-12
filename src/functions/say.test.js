import { say } from './say';
import * as InputError from '../shared/input-error-types';

describe('valid inputs', () => {
  test('should return the input as it is a valid number,' +
       ' but not a factor of 3, 5, or 15', () => {
    expect(say(4)).toBe(4);
  });

  test('should return the input as it is a valid number,' +
       ' but not a factor of 3, 5, or 15', () => {
    expect(say(60.60)).toBe(60.60);
  });

  test('should return "Fizz" as it is a valid number and factor of 3,' +
       ' but not a factor of 5 or 15 ', () => {
    expect(say(33)).toBe('Fizz');
  });

  test('should return "Fizz" as it is a valid number and factor of 3,' +
       ' but not a factor of 5 or 15 (negative number)', () => {
    expect(say(-33)).toBe('Fizz');
  });

  test('should return "Buzz" as it is a valid number and factor of 5,' +
       ' but not a factor of 3 or 15 ', () => {
    expect(say(95)).toBe('Buzz');
  });

  test('should return "Fizz Buzz" as it is a valid number and factor of 3 and 5,' +
       ' which means it is a factor of 15', () => {
    expect(say(60)).toBe('Fizz Buzz');
  });
});

describe('extreme inputs', () => {
  test('should return "Buzz" as it is a valid number and factor of 5,' +
       ' but not a factor of 3 or 15 (large number)', () => {
    expect(say(2147483645)).toBe('Buzz');
  });

  test('should return "Buzz" as it is a valid number and factor of 3,' +
       ' but not a factor of 5 or 15 (negative large number)', () => {
    expect(say(-1361903793)).toBe('Fizz');
  });
});

describe('invalid inputs', () => {
  test('should throw exception as the input should not be empty', () => {
    expect(() => say()).toThrow(InputError.nullUndefinedEmptyError);
  });

  test('should throw exception as the input should not be null', () => {
    expect(() => say(null)).toThrow(InputError.nullUndefinedEmptyError);
  });

  test('should throw exception as the input should not be undefined', () => {
    expect(() => say(undefined)).toThrow(InputError.nullUndefinedEmptyError);
  });

  test('should throw exception as the input is not a valid number (contains alphabets)', () => {
    expect(() => say('1ab23')).toThrow(InputError.notValidNumError);
  });

  test('should throw exception as the input is not a valid number (contains symbols)', () => {
    expect(() => say('123#')).toThrow(InputError.notValidNumError);
  });
});