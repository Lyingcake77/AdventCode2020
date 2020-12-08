import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';

import {RootStoreContext} from '../../Application/Store/RootStore'

const Day1b =()=>{
  const rootStore =  useContext(RootStoreContext);

  const {resultB, YearFinder2, val1, val2, val3} = rootStore.adventStore1;
  {YearFinder2()}


return( <h2>Answer for day 1b: {resultB} taken from the 3 numbers of {val1}, {val2} and {val3}. \n 
            .
</h2>);
    
  };

  export default observer(Day1b);