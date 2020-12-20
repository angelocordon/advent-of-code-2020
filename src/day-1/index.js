const findTargetNumbers = (numbers) => {
    let results; 

    firstLoop: for (let firstIndex = 0; firstIndex < numbers.length; firstIndex++) {
        // 2020 - 979 = 1041
        // 1041 - 366 = 675
        // [979, 366, 675]

        const currentNumber = numbers[firstIndex];

        secondLoop: for (let secondIndex = firstIndex; secondIndex < numbers.length; secondIndex++) {
            const targetNumber = (2020 - currentNumber) - numbers[secondIndex];

            if (numbers.indexOf(targetNumber) > -1) {
                results = [currentNumber, numbers[secondIndex], targetNumber];
                break firstLoop;
            }
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
