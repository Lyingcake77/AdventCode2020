import { createContext } from "react";
import AdventStore1 from './AdventStore1'
import AdventStore2 from "./AdventStore2";

export class RootStore {
    adventStore1:AdventStore1;
    adventStore2:AdventStore2;

    constructor(){
        this.adventStore1=new AdventStore1(this)
        this.adventStore2=new AdventStore2(this)
    }
}
export const RootStoreContext = createContext(new RootStore());