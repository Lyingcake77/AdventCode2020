import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';

import {RootStoreContext} from '../../Application/Store/RootStore'

const Day1a =()=>{
  const rootStore =  useContext(RootStoreContext);

  const {resultA, YearFinder, val1, val2} = rootStore.adventStore1;
  {YearFinder()}


return( <h2>Answer for day 1a: {resultA} taken from the 2 numbers of {val1} and {val2}. </h2>);
    
  };

  export default observer(Day1a);