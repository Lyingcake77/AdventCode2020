import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';

import {RootStoreContext} from '../../Application/Store/RootStore'

const Car =()=>{
  const rootStore =  useContext(RootStoreContext);

  const {test, observerValues} = rootStore.adventStore1;

  return( <h2>Hi, I am a Car!{observerValues} {test}</h2>);
    
  };

  export default observer(Car);