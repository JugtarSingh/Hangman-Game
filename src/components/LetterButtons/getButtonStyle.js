function getButtonStyle(letter , originalLetterSet , guessedLetterSet){
    if(guessedLetterSet.has(letter)){
        return originalLetterSet.has(letter)? 'bg-green-500' : 'bg-red-500';
    }
    else{
        return 'bg-blue-500';
    }

}

export default getButtonStyle;