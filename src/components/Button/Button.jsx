import getButtonStyle from './getButtonStyle'
function Button({ type='button' , text , onClickHandler , styleType = 'primary'}){
    return(
        <button
            type={type}
            className= {`px-4 py-2 ${getButtonStyle(styleType)}  text-white`}
            onClick={onClickHandler}
        >
            {text}
        </button>
    )
}



export default Button;
