import {useContext} from "react";
import {MainStore} from "../../../app/providers/Providers.tsx";
export const useStore = () =>useContext(MainStore)
