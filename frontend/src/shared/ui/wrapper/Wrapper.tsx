import React from "react";
import './wrapper.css'

interface Props {
    children:React.ReactNode

}

const Wrapper = ({children}:Props) =>{
    return <div className='wrapper'>
        {
            children
        }
    </div>
}

export default Wrapper