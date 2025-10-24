/**
 * 
 * @param { The word which is given as input and is expected to be guessed } originalWord 
 * @param { Letters which are guessed by the user already } guessedLetters 
 * Ex: origionalWord: HUMBLE
 * guessedLetters: ['H', 'M', 'E']
 * 
 * return -> "H _ M _ E"
 */
export default function getMaskedString(originalWord, guessedLetters) {
    guessedLetters = guessedLetters.map(Letter => Letter.toUpperCase());

    const guessedLetterSet = new Set(guessedLetters);
    const result = originalWord.toUpperCase().split('').map(char => {
        if (guessedLetterSet.has(char)) {
            return char;
        }
        else {
            return '_';
        }
    });
    return result;
}