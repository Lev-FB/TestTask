import React from "react";
import Store from "../Store.ts";
interface Props {
    children:React.ReactNode
}
import {createContext} from "react";


const MainStore = createContext(Store)
const Providers = ({children}:Props) =>{
    return <MainStore.Provider value={Store}>
        {children}
    </MainStore.Provider>
}
export default Providers
export {MainStore}