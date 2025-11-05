const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
import getButtonStyle from './getButtonStyle';
function LetterButtons( { text , guessedLetters  , onLetterClick}){
    const guessedLetterSet = new Set(guessedLetters);
    const originalLetterSet = new Set(text.toUpperCase().split(''));

    function handleLetterClick(event){
        onLetterClick?.(event.target.value);
    }

    return(
        <>
            {ALPHABETS.map((letter , index)=>{
               return (
                 <button key ={index} 
                  value ={letter}
                 className={`m-2 p-3 rounded-xl border-2 border-solid ${getButtonStyle(letter , originalLetterSet, guessedLetterSet)}`}
                 disabled = {guessedLetterSet.has(letter)}
                 onClick={handleLetterClick}
                >
                    {letter}
                </button>
               )
            })}
        </>
    )
}

export default  LetterButtons;