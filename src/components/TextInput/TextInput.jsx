function TextInput({ label ,type="text" , placeholder="Enter your input here", onChangeHandler}){
   return( <label>
        <span>{label}</span>
        <input
        className = "px-4 py-2 border rounded-xl border-gray-500 w-full"
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        />
    </label>)
}

export default TextInput;