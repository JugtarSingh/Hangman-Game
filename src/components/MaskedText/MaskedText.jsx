import getMaskedString from "./MaskingUtility"

function MaskedText({ text , guessedLetters }){

    const maskedString = getMaskedString( text , guessedLetters );
    return (
        <>
            {maskedString.map((Letter , index )=> {
                return ( <span key={index} className='mx-2 text-6xl '
                >
                    {Letter}</span>)
            })}
        </>
    ) 
}

export default MaskedText;