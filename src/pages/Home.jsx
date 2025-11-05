import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import HangmanLogo from '../assets/images/Hangman.png'
import { useContext, useEffect, useState } from "react";
import { WordContext } from "../context/WordContext";
import wordStore from '../stores/WordStore'
function Home (){
    
    // const { setWordList , setWord } = useContext(WordContext);
    const { setWordList , setWord } = wordStore();
    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const words = await response.json();

        setWordList([...words])

        let index = Math.floor(Math.random()*words.length);
        setWord(words[index].wordValue);
    }

    useEffect(()=>{
        fetchWords();
    },[])
    return (
        <>
           <div className="">
                <div className="flex justify-center">
                    <img src={HangmanLogo}/>
                </div>
                <br />
                 <Link to='/play' > 
                <div className="flex justify-center m-5">
                    <Button text="Single Player" />
                </div>
                </Link>
                <br />
                <Link to='/start'>
                    <div className="m-5 flex justify-center">
                        <Button text="Multi Player" />
                    </div>
                </Link>
           </div>
        </>
    )
}

export default Home;