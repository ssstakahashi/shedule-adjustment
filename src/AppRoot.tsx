import React,{FC} from 'react';
import './App.css';
import ScheduleTable from './ScheduleTable';

const App:FC=()=> {
  const version:String = "ver.0.0.0.1";
  console.log(version)
  return (
    <div className="App">
      <ScheduleTable />
    </div>
  );
}

export default App;
