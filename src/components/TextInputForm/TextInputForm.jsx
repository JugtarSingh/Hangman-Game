import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputFom({inputType, handleShowHideClick, handleOnSubmit , handleTextInputChange}){
    return(
        <>
            <form onSubmit= {handleOnSubmit}>
                <div>
                    <TextInput 
                    type={inputType}
                    label="Enter the Word or phase" 
                    placeholder="Enter a Word or phase here..."
                    onChangeHandler={handleTextInputChange}
                    />
                </div>

                <div>
                    <Button
                        text={inputType === "password" ? "Show" : "Hide"}
                        styleType="warning"
                        onClickHandler={handleShowHideClick}
                    />
                </div>

                <div>
                    <Button
                        type="Submit"
                        styleType="primary"
                        text = "Submit"
                    />
                </div>
            </form>
        </>
    )
}

export default TextInputFom;