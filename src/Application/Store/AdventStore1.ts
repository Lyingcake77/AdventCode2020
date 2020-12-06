import { observable, action } from "mobx"
import { RootStore } from "./RootStore";

export default class AdventStore1{
  rootStore:RootStore;
  constructor(rootStore:RootStore){
    this.rootStore=rootStore;
  }
  
  @observable observerValues="test";

  @action test = ()=>{
    console.log("im a test");
  }
}

// decorate(AdventStore1,{
//   test: action,
//   observerValues:observable
//   });