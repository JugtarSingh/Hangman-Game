import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import MaskedText from '../components/MaskedText/MaskedText'
import LetterButtons from "../components/LetterButtons/LetterButtons";
import Hangman from '../components/Hangman/Hangman';
import { WordContext } from '../context/WordContext';
function PlayGame() {
    const { word } = useContext(WordContext);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    function onLetterClick(value) {
        if (word.toUpperCase().includes(value)) {
            console.log('correct');
        }
        else {
            console.log('wrong');
            setStep(step + 1);
        }
        setGuessedLetters([...guessedLetters, value]);
    }

    return (
        <>

            <h1 className='flex justify-center text-5xl mb-20 text-red-600'>
                Play Game
            </h1>
            <div className='flex justify-center mb-10'>
                <MaskedText text={word} guessedLetters={guessedLetters} />
            </div>
            <div className='flex justify-center mb-10'>
                <div className='mt-19 grid grid-cols-10 gap-1 w-[900px] h-[100px]'>
                    <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={onLetterClick} />
                </div>
                <div>
                    <Hangman step={step} />
                </div>
            </div>
            <Link to='/start' className="text-blue-400"> <h1 className='flex justify-center text-5xl mb-20 text-blue-600'>
                Start Game
            </h1></Link>

        </>
    )
}

export default PlayGame;