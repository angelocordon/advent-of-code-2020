const findTargetNumbers = (numbers) => {
    let results; 

    for (let index = 0; index < numbers.length; index++) {
        const targetNumber = 2020 - numbers[index];
        const targetNumberIndex = numbers.indexOf(targetNumber);

        if (targetNumberIndex > -1) {
            results = [numbers[index], targetNumber];
            break;
        }
    }

    return results;
}

const multiplyNumbers = (numbers) => {
    return numbers.reduce((a, b) => a * b);
}

const findDayOneAnswer = (numLists) => {
    const numbers = findTargetNumbers(numLists);
    return multiplyNumbers(numbers);
}

export { findTargetNumbers, multiplyNumbers, findDayOneAnswer };
