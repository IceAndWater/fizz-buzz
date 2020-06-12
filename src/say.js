function say (input) {
    const result = [];

    if (!input) {
        throw new Error('Error: Invalid input. Input cannot be null or undefined.');
    } else {
        const regEx = /^-?[0-9]?[0-9\.]+$/;
        const regExResult = regEx.test(input);

        if (regExResult === false) {
            throw new Error('Error: Invalid input. Only numbers are allowed.');
        } else {
            const inputNum = parseFloat(input);
            
            if (inputNum % 3 === 0) {
                result.push('Fizz');
            }

            if (inputNum % 5 === 0) {
                result.push('Buzz');
            }
        }
    }
    
    return result.length > 0 ? result.join(' ') : input;
}

module.exports = say;