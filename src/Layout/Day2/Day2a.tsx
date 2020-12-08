import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';

import {RootStoreContext} from '../../Application/Store/RootStore'

const Day2a =()=>{
  const rootStore =  useContext(RootStoreContext);

  // const {resultA, YearFinder, val1, val2} = rootStore.adventStore1;
  // {YearFinder()}


return( <h2></h2>);
    
  };

  export default observer(Day2a);