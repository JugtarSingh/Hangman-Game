import { useState } from "react";
import TextInputFom from "./TextInputForm";
import { useNavigate } from 'react-router-dom'

function TextInputFormContainer(){
    const navigate = useNavigate();
    const [ inputType , setInputType ] = useState('password');
    const [ value , setValue ] = useState("");

    function handleOnSubmit(e){
        e.preventDefault();
        if(value){
            navigate('/play' , {state: {wordSelected : value}})
        }
    }

    function handleTextInputChange(event){
        setValue(event.target.value);
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