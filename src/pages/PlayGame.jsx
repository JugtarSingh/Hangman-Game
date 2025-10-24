import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import MaskedText from '../components/MaskedText/MaskedText'
import LetterButtons from "../components/LetterButtons/LetterButtons";
import Hangman from '../components/Hangman/Hangman';
function PlayGame(){
    const { state } = useLocation();
    const { wordSelected } = state;
    const [guessedLetters , setGuessedLetters ] = useState([]); 
    const [ step , setStep ] = useState(0);
    function onLetterClick(value){
        if(wordSelected.toUpperCase().includes(value)){
            console.log('correct');
        }
        else{
            console.log('wrong');
            setStep(step+1);
        }
        setGuessedLetters([...guessedLetters , value]);
    }

    return (
        <>
            <h1>
                Play Game 
            </h1>
            <div>
                <MaskedText text={wordSelected} guessedLetters={guessedLetters}/>
            </div>
            <div>
                <LetterButtons text={wordSelected}  guessedLetters={guessedLetters} onLetterClick={onLetterClick} />
            </div>
            <Hangman step={step}/>
            <Link to='/start' className="text-blue-400">Start Game</Link>
        </>
    )
}

export default PlayGame;