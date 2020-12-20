// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc

const passwordIsValid = ({min, max, letter, string}) => {
    let targetLetters = string.split('').filter((targetLetter) => targetLetter === letter);

    if (targetLetters.length >= min && targetLetters.length <= max) {
        return true;
    }

    return false;
}

const countValidPasswords = (passwords) => {
    let count = 0;

    for (let index = 0; index < passwords.length; index++) {
        if (passwordIsValid(passwords[index])) {
            count++
        }
    }

    return count;
}

export { countValidPasswords, passwordIsValid }
