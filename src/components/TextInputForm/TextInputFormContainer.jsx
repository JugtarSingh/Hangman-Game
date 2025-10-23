import { useState } from "react";
import TextInputFom from "./TextInputForm";

function TextInputFormContainer(){

    const [ inputType , setInputType ] = useState('password');

    function handleOnSubmit(e){
        e.preventDefault();
        console.log(e);
    }

    function handleTextInputChange(event){
        console.log(event.target);
    }

    function handleShowHideClick(){
        if ( inputType === "password" ){
            setInputType("text");
        }
        else{
            setInputType("password");
        }
    }

    return <TextInputFom 
    inputType={inputType}
    handleOnSubmit={handleOnSubmit}
    handleTextInputChange = {handleTextInputChange}
    handleShowHideClick={handleShowHideClick}
    />
}

export default TextInputFormContainer;