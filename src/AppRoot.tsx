import React,{FC} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScheduleNew from './ScheduleNew';
import ScheduleTable from './ScheduleTable';
// import { useLocalStorage } from './useLocalStorage';

const App:FC=()=> {
  const version:String = "ver.0.0.0.2";
  // const [state, setState] = useLocalStorage('test');

  // const AppContext = createContext();
  console.log(version)
  return (
    // <AppContext.Provider value={[ state, setState]}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/new" component={ScheduleNew} />
      <Route path="/index" component={ScheduleTable} />
      <Route path="/" component={ScheduleTable} />
    </Switch>
  </BrowserRouter>
    // </AppContext.Provider>
  );
}

export default App;