const passwordIsValid = ({min, max, letter, string}) => {
    const minHasLetter = string[min - 1] === letter;
    const maxHasLetter = string[max - 1] === letter;

    if (minHasLetter && maxHasLetter) { return false }
    if (minHasLetter || maxHasLetter) { return true }

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
