import { useState } from "react"
const useInputState = (defaultValue=null) =>{
    const [value, setValue] = useState(defaultValue);

    const onChange = val =>{
        setValue(val);
    }
    // return [value, handleChange]
    return {
        value,
        onChange
    }
}

export default useInputState;