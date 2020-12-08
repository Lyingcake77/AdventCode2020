import { observable, action, computed } from "mobx"
import { RootStore } from "./RootStore";

export default class AdventStore2{
  rootStore:RootStore;
  constructor(rootStore:RootStore){
    this.rootStore=rootStore;
  }

}

