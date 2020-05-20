import React , {useLayoutEffect} from 'react';

import Header from './components/header2/header';
import Phase1 from './components/phase1/phase1';
import Phase2 from './components/phase2/phase2';
import Phase3 from './components/phase3/phase3';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Phase1></Phase1>
      <Phase2></Phase2>
      <Phase3></Phase3>
    </div>
  );
}

export default App;
