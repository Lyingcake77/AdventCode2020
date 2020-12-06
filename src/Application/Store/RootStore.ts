import { createContext } from "react";
import AdventStore1 from './AdventStore1'

export class RootStore {
    adventStore1;

    constructor(){
        this.adventStore1=new AdventStore1(this)
    }
}
export const RootStoreContext = createContext(new RootStore());