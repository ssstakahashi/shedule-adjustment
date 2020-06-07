import React,{FC} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScheduleNew from './components/ScheduleNew';
import ScheduleTable from './components/ScheduleTable';
import StepEntry from './components/StepEntry';
// import { useLocalStorage } from './useLocalStorage';

const App:FC=()=> {
  const version:String = "ver.0.0.0.3";
  // const [state, setState] = useLocalStorage('test');

  // const AppContext = createContext();
  console.log(version)
  return (
    // <AppContext.Provider value={[ state, setState]}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/new" component={ScheduleNew} />
      <Route exact path="/initialentry" component={StepEntry} />
      <Route exact path="/index" component={ScheduleTable} />
      <Route path="/" component={ScheduleTable} />
    </Switch>
  </BrowserRouter>
    // </AppContext.Provider>
  );
}

export default App;