import { useState } from "react"

export const userFormHook = (initialState={}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [FormHook, setFormHook] = useState(initialState)

    const handleInputChange = ({target})=>{
        setFormHook({
            ...FormHook,
            [target.name]:target.value
        })
    }
    return {handleInputChange,FormHook}
}
